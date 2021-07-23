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
			unique: true,
		},
		mobile: {
			type: String,
			required: [true, 'Please add Mobile number'],
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
			default: 'employee',
		},
	},
	{ timestamps: true }
);

module.exports = User = mongoose.model('User', UserSchema);
