import { Router } from 'express';
import { fetchRobots } from '../controller/robots.controller';

const router = Router();

// /api/robots/
router.route('/').get(fetchRobots);

export default router;
