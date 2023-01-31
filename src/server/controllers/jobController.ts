import { Request, Response, NextFunction } from 'express';
import { JobController, ServerError } from '../../types';
import Job from '../models/jobModel';

const jobController: JobController = {
  addJob: (req: Request, res: Response, next: NextFunction): void => {
    const { title, company, status, url } = req.body;
    const summary = req.body.summary ? req.body.summary : '';
    const user_id = req.cookies.ssid;
    Job.create({ user_id, title, company, status, url, summary })
      .then((job) => {
        res.locals.job = job;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },
};

export default jobController;