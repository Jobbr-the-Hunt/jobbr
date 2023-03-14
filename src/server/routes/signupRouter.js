"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var router = (0, express_1.Router)();
router.post('/', userController_1["default"].createUser, function (req, res) {
    return res.status(201).json(res.locals.user);
});
exports["default"] = router;
