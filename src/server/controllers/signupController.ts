import { Request, Response, NextFunction } from 'express';
import { SignupController, ServerError } from '../../types';
import User from '../models/userModel';

const signupController: SignupController = {
  createUser: (req: Request, res: Response, next: NextFunction): void => {
    console.log('REQ.BODY', req.body);
    const { username, password, name } = req.body;
    User.create({ username, password, name })
      .then((user) => {
        res.locals.user = user;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },
};

export default signupController;
