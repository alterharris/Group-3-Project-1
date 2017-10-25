"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
let app = express();
console.log("The server is listening");
console.log(process.env.MY_Variable);
let clientPath = path.join(__dirname, '../client');
app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());
// configurePassport(app);
// app.use('/api', api);
app.get('*', (req, res, next) => {
    if (isAsset(req.url)) {
        return next();
    }
    else {
        res.sendFile(path.join(clientPath, 'index.html'));
    }
});
app.listen(3000);
function isAsset(path) {
    let pieces = path.split('/');
    if (pieces.length === 0) {
        return false;
    }
    let last = pieces[pieces.length - 1];
    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1) {
        return true;
    }
    else if (last.indexOf('.') !== -1) {
        return true;
    }
    else {
        return false;
    }
}
