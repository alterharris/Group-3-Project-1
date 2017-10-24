import * as express from 'express';
import categories from './controllers/categories.ctrl';



const router = express.Router();

router
.use('/categories', categories)



export default router;