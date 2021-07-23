const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add Name'],
		},
		email: {
			type: String,
			required: [true, 'Please add Email Id'],
		},
		mobile: {
			type: String,
			required: [true, 'Please add Mobile nuber'],
		},
		age: {
			type: Number,
		},
		password: {
			type: String,
		},
		role: {
			type: String,
			enum: ['admin', 'employee'],
		},
	},
	{ timestamps: true }
);

modules.exports = User = mongoose.model('User', UserSchema);
