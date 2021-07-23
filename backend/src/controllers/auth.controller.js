exports.login = async (req, res, next) => {
	res.status(200).json({
		success: true,
		message: 'Login called',
	});
};
