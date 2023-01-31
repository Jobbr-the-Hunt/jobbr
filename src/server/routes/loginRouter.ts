import { Router, Request, Response } from 'express';
import loginController from '../controllers/loginController';

const router = Router();

router.post('/', loginController.verifyUser, (req: Request, res: Response) => {
  if (!res.locals.user) { // unsuccessful look up of user
    console.log('In empty res.locals.user');
    return res.sendStatus(400);
  }
  return res.status(200).json(res.locals.user);
});

export default router;
