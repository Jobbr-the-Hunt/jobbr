"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    res.clearCookie('ssid');
    console.log('Cookie cleared. Logged out.');
    return res.sendStatus(200);
});
exports["default"] = router;
