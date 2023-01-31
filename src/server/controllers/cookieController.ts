import { Request, Response, NextFunction } from 'express';
import { CookieController, ServerError } from '../../types';

const cookieController: CookieController = {
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => {
    const userID = res.locals.user._id;
    res.cookie('ssid', userID);
    return next();
  }
};

export default cookieController;