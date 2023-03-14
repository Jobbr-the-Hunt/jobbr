"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
var jobSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    title: { type: String, required: true },
    company: { type: String, required: true },
    // dateApplied: { type: Date, required: true },
    status: { type: String, required: true },
    url: { type: String, required: true },
    summary: { type: String, required: true }
});
exports["default"] = mongoose_1["default"].model('job', jobSchema);
