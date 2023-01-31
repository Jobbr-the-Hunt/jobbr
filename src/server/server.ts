const express = require('express');
import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import signupRouter from './routes/signupRouter';
import loginRouter from './routes/loginRouter';
import logoutRouter from './routes/logoutRouter';
import jobRouter from './routes/jobRouter';

import { ServerError } from '../types';

const app = express();

const MONGO_URI = 'mongodb+srv://codesmith:Codesmith123@cluster0.mg4yveh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/job', jobRouter);

// signup endpoint
// post
// login endpoint
// get
// logout endpoint
// get
// job endpoint
// get, post, patch, delete



app.use('/', (err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: ServerError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('server is listening on port 3000'));