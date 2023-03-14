"use strict";
exports.__esModule = true;
var jobModel_1 = require("../models/jobModel");
var jobController = {
    addJob: function (req, res, next) {
        console.log('req body', req.body);
        var _a = req.body, title = _a.title, company = _a.company, status = _a.status, url = _a.url;
        var summary = req.body.summary ? req.body.summary : '';
        var user_id = req.cookies.ssid;
        console.log('title: ', title);
        console.log('company: ', company);
        console.log('status: ', status);
        console.log('url: ', url);
        console.log('summary:', summary);
        console.log('user_id: ', req.cookies);
        jobModel_1["default"].create({ user_id: user_id, title: title, company: company, status: status, url: url, summary: summary })
            .then(function (job) {
            res.locals.job = job;
            return next();
        })["catch"](function (err) {
            return next(err);
        });
    },
    getJobs: function (req, res, next) {
        var user_id = req.cookies.ssid;
        console.log('USER_ID: ', user_id);
        console.log('COOKIE: ', req.cookies);
        jobModel_1["default"].find({ user_id: user_id })
            .then(function (jobs) {
            console.log('INSIDE GET JOBS MIDDLEWARE:', jobs);
            res.locals.jobs = jobs;
            return next();
        })["catch"](function (err) {
            return next(err);
        });
    },
    updateJob: function (req, res, next) {
        var id = req.params.id;
        var updates = req.body;
        jobModel_1["default"].findOneAndUpdate({ id: id }, updates)
            .then(function (job) {
            res.locals.job = job;
            return next();
        })["catch"](function (err) {
            return next(err);
        });
    },
    deleteJob: function (req, res, next) {
        var id = req.params.id;
        jobModel_1["default"].findOneAndDelete({ id: id })
            .then(function (job) {
            res.locals.job = job;
            return next();
        })["catch"](function (err) {
            return next(err);
        });
    }
};
exports["default"] = jobController;
