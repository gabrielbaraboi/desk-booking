const mongoose = require("mongoose");

var BookingSchema = new mongoose.Schema({
	desk: { type: mongoose.Schema.Types.ObjectId, ref: "Desk" },
	Owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	Date: { type: String, required: true },
});

module.exports = mongoose.model("Booking", BookingSchema);
