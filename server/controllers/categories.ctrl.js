"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedures = require("../procedures/categories.proc");
let router = express.Router();
router.route('/') //actually /api/categories
    .get((req, res) => {
    procedures.all()
        .then((categories) => {
        res.send(categories);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;
