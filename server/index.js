"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// import configurePassport from'./config/passport';
const prerender = require("prerender-node");
const api_1 = require("./api");
let app = express();
console.log("The server is listening");
// console.log(process.env.MY_Variable);
prerender.set("prerenderToken", process.env.PRERENDER_TOKEN);
let clientPath = path.join(__dirname, "../client");
app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());
// configurePassport(app);
app.use('/api', api_1.default);
app.use(prerender);
app.get("*", (req, res, next) => {
    if (isAsset(req.url)) {
        return next();
    }
    else {
        res.sendFile(path.join(clientPath, "index.html"));
    }
});
app.listen(3000);
function isAsset(path) {
    let pieces = path.split("/");
    if (pieces.length === 0) {
        return false;
    }
    let last = pieces[pieces.length - 1];
    if (path.indexOf("/api") !== -1 || path.indexOf("/?") !== -1) {
        return true;
    }
    else if (last.indexOf(".") !== -1) {
        return true;
    }
    else {
        return false;
    }
}
