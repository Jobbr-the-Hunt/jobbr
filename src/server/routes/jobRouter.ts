import { Router, Request, Response } from 'express';
import jobController from '../controllers/jobController';

const router = Router();

router.get('/', jobController.getJobs, (req: Request, res: Response) => {
  return res.status(201).json(res.locals.jobs);
});

router.post('/', jobController.addJob, (req: Request, res: Response) => {
  return res.status(201).json(res.locals.job);
});

router.patch('/:id', jobController.updateJob, (req: Request, res: Response) => {
  return res.status(201).json(res.locals.job);
});

router.delete('/:id', jobController.deleteJob, (req: Request, res: Response) => {
  return res.status(201).json(res.locals.job);
});

export default router;