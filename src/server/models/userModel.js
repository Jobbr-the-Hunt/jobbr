"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
// const SALT_WORK_FACTOR = 10;
var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
});
// userSchema.pre('save', async function (next) {
//   const user = this;
//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(user.password, salt);
//   return next();
//   // bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//   //   if (err) return next(err);
//   //   bcrypt
//   //     .hash(user.password, SALT_WORK_FACTOR)
//   //     .then((hash) => {
//   //       user.password = hash;
//   //       return next();
//   //     })
//   //     .catch((err) => next(err));
//   // });
// });
exports["default"] = mongoose_1["default"].model('user', userSchema);
