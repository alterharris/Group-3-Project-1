"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const categories_ctrl_1 = require("./controllers/categories.ctrl");
const router = express.Router();
router
    .use('/categories', categories_ctrl_1.default);
exports.default = router;
