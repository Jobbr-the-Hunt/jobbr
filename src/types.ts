import { Request, Response, NextFunction } from 'express';

export type ServerError = {
  log: string;
  status: number;
  message: { [k: string]: string };
};

export type Listing = {
  jobTitle: string;
  company: string;
  progress: string;
  url: string;
  summary: string;
  date: Date;
};

export interface SignupController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
}
export interface LoginController {
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}
export interface LogoutController {}
export interface JobController {}
