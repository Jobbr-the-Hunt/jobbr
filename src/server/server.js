"use strict";
exports.__esModule = true;
var path_1 = require("path");
var express = require('express');
var cors_1 = require("cors");
var mongoose_1 = require("mongoose");
var cookie_parser_1 = require("cookie-parser");
var signupRouter_1 = require("./routes/signupRouter");
var loginRouter_1 = require("./routes/loginRouter");
var logoutRouter_1 = require("./routes/logoutRouter");
var jobRouter_1 = require("./routes/jobRouter");
var app = express();
app.use((0, cookie_parser_1["default"])());
var MONGO_URI = 'mongodb+srv://codesmith:Codesmith123@cluster0.mg4yveh.mongodb.net/?retryWrites=true&w=majority';
// 'mongodb+srv://admin:john@cluster0.hb8eyzf.mongodb.net/?retryWrites=true&w=majority';
mongoose_1["default"]
    .connect(MONGO_URI)
    .then(function () { return console.log('Connected to Mongo DB.'); })["catch"](function (err) { return console.log(err); });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    optionSuccessStatus: 200
};
app.use(express.static(path_1["default"].resolve(__dirname, '../../dist')));
// app.use('/build', express.static(path.resolve(__dirname, '../../dist')));
app.use((0, cors_1["default"])(corsOptions));
app.use('/signup', signupRouter_1["default"]);
app.use('/login', loginRouter_1["default"]);
app.use('/logout', logoutRouter_1["default"]);
app.use('/job', jobRouter_1["default"]);
// signup endpoint
// post
// login endpoint
// get
// logout endpoint
// get
// job endpoint
// get, post, patch, delete
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
