import * as express from 'express';
import * as procedures from '../procedures/categories.proc';
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
export default router;