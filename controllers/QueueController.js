/* eslint-disable linebreak-style */
const QueueModel = require("../models/QueueModel");
const { body,validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

exports.queueCenter = [
	body("Name", "Name must not be empty.").isLength({ min: 1 }).trim(),
	body("description", "Description must not be empty.").isLength({ min: 1 }).trim(),
	body("estimated_queue_time","Estimated time for queuing is required").required(),
	body("queue_location","Location for queuing is required").required(),

	sanitizeBody("*").escape(),
	(req, res) => {
		try {
			const errors = validationResult(req);
			var Queue = new QueueModel(
				{ queueName: req.body.name,
					location: req.body.queue_location,
					user: req.user,
					description: req.body.description,
					qr_url:"https://queTee.com",
					estimated_queue_time: req.body.estimated_queue_time
				});

			if (!errors.isEmpty()) {
				return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
			}
			else {
				//Save Queue.
				Queue.save(function (err) {
					if (err) { return apiResponse.ErrorResponse(res, err); }
					let QueueData = new QueueData(Queue);
					return apiResponse.successResponseWithData(res,"Queue add Success.", QueueData);
				});
			}
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];
