import { Request, Response, NextFunction } from 'express';
import { JobController, ServerError } from '../../types';
import Job from '../models/jobModel';

const jobController: JobController = {
  addJob: (req: Request, res: Response, next: NextFunction): void => {
    console.log('req body', req.body);
    const { title, company, status, url } = req.body;
    const summary = req.body.summary ? req.body.summary : '';
    const user_id = req.cookies.ssid;
    console.log('title: ', title);
    console.log('company: ', company);
    console.log('status: ', status);
    console.log('url: ', url);
    console.log('summary:', summary);
    console.log('user_id: ', req.cookies);
    Job.create({ user_id, title, company, status, url, summary })
      .then((job) => {
        res.locals.job = job;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },
  getJobs: (req: Request, res: Response, next: NextFunction): void => {
    const user_id = req.cookies.ssid;
    console.log('USER_ID: ', user_id);
    console.log('COOKIE: ', req.cookies);
    Job.find({ user_id })
      .then((jobs) => {
        console.log('INSIDE GET JOBS MIDDLEWARE:', jobs);
        res.locals.jobs = jobs;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },
  updateJob: (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    const updates = req.body;
    Job.findOneAndUpdate({ id }, updates)
      .then((job) => {
        res.locals.job = job;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },
  deleteJob: (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    Job.findOneAndDelete({ id })
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
