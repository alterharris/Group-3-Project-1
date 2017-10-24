"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var categories_ctrl_1 = require("./controllers/categories.ctrl");
var router = express.Router();
router
    .use('/categories', categories_ctrl_1.default);
exports.default = router;
