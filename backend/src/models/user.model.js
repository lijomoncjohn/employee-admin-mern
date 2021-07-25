const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
	{
		employeeId: {
			type: String,
			required: [true, 'Please add an ID'],
		},
		name: {
			type: String,
			required: [true, 'Please add Name'],
		},
		email: {
			type: String,
			required: [true, 'Please add Email Id'],
			unique: true,
		},
		address: {
			type: String,
			required: [true, 'Please add an Address'],
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
		tokens: [
			{
				token: {
					type: String,
				},
			},
		],
	},
	{ timestamps: true }
);

// Password encryption
UserSchema.pre('save', async function (next) {
	const user = this;

	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

// Check password match
UserSchema.methods.matchPassword = function (userPassword) {
	return bcrypt.compare(userPassword, this.password);
};

// Generate authentication toen
UserSchema.methods.genrateToken = function () {
	const token = jwt.sign(
		{
			id: this._id.toString(),
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRE,
		}
	);

	return token;
};

module.exports = User = mongoose.model('User', UserSchema);
