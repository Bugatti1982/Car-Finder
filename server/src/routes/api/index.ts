import { Router } from 'express';
import { CarRouter } from './car-routes.js';
import { workRouter } from './work-car.js';

const router = Router();

router.use('/Cars', CarRouter);
router.use('/works', workRouter);

export default router;
