"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
// import configurePassport from'./config/passport';
// import api from './api';
var app = express();
console.log("The server is listening");
console.log(process.env.MY_Variable);
var clientPath = path.join(__dirname, '../client');
app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());
// configurePassport(app);
// app.use('/api', api);
app.get('*', function (req, res, next) {
    if (isAsset(req.url)) {
        return next();
    }
    else {
        res.sendFile(path.join(clientPath, 'index.html'));
    }
});
app.listen(3000);
function isAsset(path) {
    var pieces = path.split('/');
    if (pieces.length === 0) {
        return false;
    }
    var last = pieces[pieces.length - 1];
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
