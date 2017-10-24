"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var procedures = require("../procedures/categories.proc");
var router = express.Router();
router.route('/') //actually /api/categories
    .get(function (req, res) {
    procedures.all()
        .then(function (categories) {
        res.send(categories);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;
