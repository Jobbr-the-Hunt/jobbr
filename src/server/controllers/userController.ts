import { Request, Response, NextFunction } from 'express';
import { UserController, ServerError } from '../../types';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';

const userController: UserController = {
  // Creates user on Sign Up
  createUser: (req: Request, res: Response, next: NextFunction): void => {
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
  // Verifies user on Log In
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
  },
};

export default userController;