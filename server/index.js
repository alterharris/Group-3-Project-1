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
// prerender.set('prerenderToken', 'dvVF8ZDN2nkhVhkw1RKv');
// // prerender.set('prerenderServiceUrl', 'http://localhost:1337/');
// COMMENT THIS OUT AFTER TESTING
// prerender.set("prerenderServiceUrl", "http://localhost:1337/");
// COMMENT THIS OUT AFTER TESTING
let clientPath = path.join(__dirname, "../client");
app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());
// configurePassport(app);
app.use("/api", api_1.default);
app.use(prerender);
app.get("*", (req, res, next) => {
    if (isAsset(req.url)) {
        return next();
    }
    else {
        res.sendFile(path.join(clientPath, "index.html"));
    }
});
app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000.');
});
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
