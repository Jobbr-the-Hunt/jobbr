"use strict";
exports.__esModule = true;
var express = require('express');
// import express, { Request, Response, NextFunction, RequestHandler } from 'express';
var app = express();
app.use(express.json());
app.use('/', function (err, req, res, next) {
    var defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' }
    };
    var errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
app.listen(3000, function () { return console.log('server is listening on port 3000'); });
