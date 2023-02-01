import { Router, Request, Response } from 'express';
import userController from '../controllers/userController';
import cookieController from '../controllers/cookieController';

const router = Router();

router.post('/', userController.verifyUser, cookieController.setSSIDCookie, (req: Request, res: Response) => {
  console.log('login anon middleware', res.locals.user)
  if (!res.locals.user) { // unsuccessful look up of user
    return res.sendStatus(400);
  }
  return res.status(200).json(res.locals.user);
});

export default router;
