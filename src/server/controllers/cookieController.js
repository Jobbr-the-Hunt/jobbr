"use strict";
exports.__esModule = true;
var cookieController = {
    setSSIDCookie: function (req, res, next) {
        var userID = res.locals.user._id;
        res.cookie('ssid', userID);
        return next();
    }
};
exports["default"] = cookieController;
