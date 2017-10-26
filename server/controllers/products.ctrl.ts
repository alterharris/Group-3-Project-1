import * as express from "express";
import * as procedures from "../procedures/products.proc";

let router = express.Router();

router.route("/").get((req, res) => {
  procedures
    .all()
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

router.route("/:id").get((req, res) => {
  procedures
    .product(req.params.id)
    .then(product => {
      res.send(product);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

router.route("/category/:id").get((req, res) => {
  procedures
    .prodcategories(req.params.categoryid)
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

export default router;
