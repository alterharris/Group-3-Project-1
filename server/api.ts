import * as express from "express";
import categories from "./controllers/categories.ctrl";

import paymentCtrl from "./controllers/payment.ctrl";
import contactFormController from "./controllers/contactform.ctrl";
import products from "./controllers/products.ctrl";

const router = express.Router();

router
  .use("/categories", categories)
  .use("/payment", paymentCtrl)
  .use("/contactform", contactFormController)
  .use("/products", products);

export default router;
