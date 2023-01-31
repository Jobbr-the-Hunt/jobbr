import { Request, Response, NextFunction } from 'express';

export type ServerError = {
  log: string,
  status: number,
  message: { [k: string]: string; },
};

export interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void,
  verifyUser: (req: Request, res: Response, next: NextFunction) => void,
};

export interface JobController {
  addJob: (req: Request, res: Response, next: NextFunction) => void,
  getJobs: (req: Request, res: Response, next: NextFunction) => void,
  updateJob: (req: Request, res: Response, next: NextFunction) => void,
  deleteJob: (req: Request, res: Response, next: NextFunction) => void,
};


export interface CookieController {
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => void,
};