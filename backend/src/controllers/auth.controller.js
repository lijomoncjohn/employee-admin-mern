exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email, role: 'admin' });

	if (!user) {
		return res.status(200).json({
			success: false,
			message: "User doesn't exist",
		});
	}

	const isMatch = await user.matchPassword(password);

	if (!isMatch) {
		return res.status(403).json({
			success: false,
			message: 'Invalid password',
		});
	}

	const token = user.genrateToken();

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
