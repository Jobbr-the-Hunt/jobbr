"use strict";
exports.__esModule = true;
var userModel_1 = require("../models/userModel");
var bcryptjs_1 = require("bcryptjs");
var userController = {
    // Creates user on Sign Up
    createUser: function (req, res, next) {
        console.log('entered create user');
        var _a = req.body, username = _a.username, password = _a.password, name = _a.name;
        console.log('logging:', username, password, name);
        userModel_1["default"].create({ username: username, password: password, name: name })
            .then(function (user) {
            res.locals.user = user;
            return next();
        })["catch"](function (err) {
            console.log('caught an error!', err);
            return next(err);
        });
    },
    // Verifies user on Log In
    verifyUser: function (req, res, next) {
        var _a = req.body, username = _a.username, password = _a.password;
        userModel_1["default"].findOne({ username: username })
            .then(function (data) {
            if (!data) {
                console.log('Username not found.');
                return next();
            }
            bcryptjs_1["default"]
                .compare(password, data.password)
                .then(function (result) {
                if (!result) {
                    console.log('Incorrect password');
                    return next();
                }
                else {
                    res.locals.user = data;
                    return next();
                }
            })["catch"](function (err) {
                return next(err);
            });
        })["catch"](function (err) {
            return next(err);
        });
    }
};
exports["default"] = userController;
