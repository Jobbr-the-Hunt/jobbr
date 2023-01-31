import { Router, Request, Response } from 'express';
import signupController from '../controllers/signupController';

const router = Router();

router.post('/', signupController.createUser, (req: Request, res: Response) => {
  return res.status(201).json(res.locals.user);
});

export default router;