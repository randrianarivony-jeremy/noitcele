import { Router } from 'express';
import { vote } from '../Controllers/candidates.controller.js';

const router = Router();
router.post('/', vote);

export default router;
