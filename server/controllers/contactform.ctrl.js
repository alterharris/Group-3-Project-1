"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_svc_1 = require("../services/email.svc");
const router = express_1.Router();
//actually api/contactform
router.post("/", (req, res) => {
    email_svc_1.sendEmail("BKB4979@gmail.com", req.body.from, "Covalence Store Inquiry", req.body.message)
        .then((response) => {
        res.sendStatus(201);
    })
        .catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});
exports.default = router;
