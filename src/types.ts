import { Request, Response, NextFunction } from 'express';

export type ServerError = {
  log: string,
  status: number,
  message: { [k: string]: string; },
};

export interface SignupController {
  createUser: (req: Request, res: Response, next: NextFunction) => void,
};
export interface LoginController {
  verifyUser: (req: Request, res: Response, next: NextFunction) => void,
};
export interface LogoutController { };
export interface JobController { };

