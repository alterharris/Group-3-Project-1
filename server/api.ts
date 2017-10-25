import * as express from 'express';
import categories from './controllers/categories.ctrl';

import paymentCtrl from './controllers/payment.ctrl';

const router = express.Router();

router
.use('/categories', categories)
.use('/payment', paymentCtrl);



export default router;