import * as sendgrid from "sendgrid";
const helper = sendgrid.mail;
const sg = sendgrid(process.env.SENDGRID_AVI_KEY || "");
