// imports router from express contains various routes that the app will handle.
import { Router } from 'express';
// imports apiRoutes from api folders
// this allows us to keep main server clean and organized
import apiRoutes from './api/index.js';
const router = Router();
router.use('/api', apiRoutes);
export default router;
