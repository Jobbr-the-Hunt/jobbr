"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var cookieController_1 = require("../controllers/cookieController");
var router = (0, express_1.Router)();
router.post('/', userController_1["default"].verifyUser, cookieController_1["default"].setSSIDCookie, function (req, res) {
    if (!res.locals.user) { // unsuccessful look up of user
        return res.sendStatus(400);
    }
    return res.status(200).json(res.locals.user);
});
exports["default"] = router;
