import { Router } from 'express';
import { fetchProjects } from '../controller/projects.controller';

const router = Router();

router.route('/').get(fetchProjects);

export default router;
