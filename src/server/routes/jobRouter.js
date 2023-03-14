"use strict";
exports.__esModule = true;
var express_1 = require("express");
var jobController_1 = require("../controllers/jobController");
var router = (0, express_1.Router)();
router.get('/', jobController_1["default"].getJobs, function (req, res) {
    return res.status(201).json(res.locals.jobs);
});
router.post('/', jobController_1["default"].addJob, function (req, res) {
    return res.status(201).json(res.locals.job);
});
router.patch('/:id', jobController_1["default"].updateJob, function (req, res) {
    return res.status(201).json(res.locals.job);
});
router["delete"]('/:id', jobController_1["default"].deleteJob, function (req, res) {
    return res.status(201).json(res.locals.job);
});
exports["default"] = router;
