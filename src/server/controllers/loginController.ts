import { Request, Response, NextFunction } from 'express';
import { LoginController, ServerError } from '../../types';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';

const loginController: LoginController = {
  verifyUser: (req: Request, res: Response, next: NextFunction): void => {
    const { username, password } = req.body;
    User.findOne({ username })
      .then((data) => {
        if (!data) {
          console.log('Username not found.');
          return next();
        }
        bcrypt.compare(password, data.password)
          .then((result => {
            if (!result) {
              console.log('Incorrect password');
              return next();
            }
            else {
              res.locals.user = data;
              return next();
            }
          }))
          .catch((err) => {
            return next(err);
          });
      })
      .catch(err => {
        return next(err);
      });
  }
};

export default loginController;