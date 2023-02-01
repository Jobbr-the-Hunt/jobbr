import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.clearCookie('ssid');
  console.log('Cookie cleared. Logged out.');
  return res.sendStatus(200);
});

export default router;