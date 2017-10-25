import { Router } from "express";
import { sendEmail } from "../services/email.svc";

const router = Router();

//actually api/contactform
router.post("/", (req, res) => {
  sendEmail(
    "BKB4979@gmail.com",
    req.body.from,
    "Covalence Store Inquiry",
    req.body.message
  )
    .then(response => {
      res.sendStatus(201);
    })
    .catch(e => {
      console.log(e);
      res.sendStatus(500);
    });
});

export default router;
