// Initial path: server/src/routes/api/index.js
// we look here to rename the files in the front end
// key component in that it takes all the components and mounts them to the DOM


import { Router } from 'express';
import { CarRouter } from './car-routes.js';
import { workRouter } from './work-car.js';

const router = Router();

router.use('/Cars', CarRouter);
router.use('/works', workRouter);

export default router;
