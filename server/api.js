"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const categories_ctrl_1 = require("./controllers/categories.ctrl");
const payment_ctrl_1 = require("./controllers/payment.ctrl");
const contactform_ctrl_1 = require("./controllers/contactform.ctrl");
const router = express.Router();
router
    .use("/categories", categories_ctrl_1.default)
    .use("/payment", payment_ctrl_1.default)
    .use("/contactform", contactform_ctrl_1.default);
exports.default = router;
