const ErrorResponse = require('../utils/errorResponse');

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email, role: 'admin' });

	if (!user) {
		return next(new ErrorResponse(`User not found with email ${email}`, 404));
	}

	const isMatch = await user.matchPassword(password);

	if (!isMatch) {
		return res.status(403).json({
			success: false,
			message: 'Invalid password',
		});
	}

	const token = user.genrateToken();

	user.tokens = user.tokens.concat({ token: token });

	await user.save();

	res.status(200).json({
		success: true,
		message: 'Loggin success',
		data: {
			token,
			userId: user._id,
		},
	});
};

exports.recoverPassword = async (req, res, next) => {
	res.status(200).json({
		success: true,
	});
};

exports.resetPassword = async (req, res, next) => {
	res.status(200).json({
		success: true,
	});
};

exports.logout = async (req, res, next) => {
	try {
		req.user.token = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});

		await req.user.save();

		return res.status(200).json({
			success: true,
			message: 'Logged out successfully',
		});
	} catch (error) {
		return next(new ErrorResponse('Failed to logout from server', 500));
	}
};
