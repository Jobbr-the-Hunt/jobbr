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
  // id: string;
};

export interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}

export interface JobController {
  addJob: (req: Request, res: Response, next: NextFunction) => void;
}

export interface CookieController {
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => void;
}
