import { Router, Request, Response } from 'express';
import jobController from '../controllers/jobController';

const router = Router();

router.get('/');

router.post('/', jobController.addJob, (req: Request, res: Response) => {
  return res.status(201).json(res.locals.job);
});

router.patch('/');

router.delete('/');

export default router;