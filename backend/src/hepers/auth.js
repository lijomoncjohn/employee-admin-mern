const jwt = require('jsonwebtoken');

const ErrorResponse = require('../utils/errorResponse');

exports.authenticate = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	)
		token = req.headers.authorization.split(' ')[1];

	if (!token) {
		new ErrorResponse('Authentication token missing', 401);
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = await User.findById(decoded._id);

		next();
	} catch (error) {
		new ErrorResponse('You are not authorized', 401);
	}
};

exports.authorize = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new ErrorResponse('You are not authorized to aperform this action', 401)
			);
		}
		next();
	};
};
