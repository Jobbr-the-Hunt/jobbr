import { Router, Request, Response } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.post('/', userController.createUser, (req: Request, res: Response) => {
  return res.status(201).json(res.locals.user);
});

export default router;