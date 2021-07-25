const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	)
		token = req.headers.authorization.split(' ')[1];

	if (!token) {
		return res.status(401).json({
			success: false,
			message: 'Not authorized',
		});
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = await User.findById(decoded._id);

		next();
	} catch (error) {
		return res.status(401).json({
			success: false,
			message: 'Not authorized',
		});
	}
};

exports.authorize = async (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return res.status(403).json({
				success: false,
				message: 'You are not authorized to access this',
			});
		}
		next();
	};
};
