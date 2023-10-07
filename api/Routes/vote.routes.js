import { Router } from 'express';
import { create, vote } from '../Controllers/candidates.controller.js';

const router = Router();
router.post('/create', create);
router.post('/', vote);

export default router;
