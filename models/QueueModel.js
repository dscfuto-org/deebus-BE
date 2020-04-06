/* eslint-disable linebreak-style */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QueueSchema = new Schema({
	queueName: {type: String, required: true},
	description: {type: String, required: true},
	user: { type: Schema.ObjectId, ref: "User", required: true },
	qr_url: { type: String, required: true },
	total_scans: { type: Number ,default: 0},
	queue_status: { type: Number, required: true },
	no_in_queue: { required: true, default: 0 },
	last_assigned_no: { type: Number },
	queue:{ type: { user: String, queue_number: Number, id: String, check_in_time: Date } },
	currrent_user_on_queue: { type: Schema.ObjectId, ref: "User"},
	estimated_queue_time: { type: Date, required: true }
}, {timestamps: true});

module.exports = mongoose.model("Queue", QueueSchema);