const User = require('../models/user.model');

exports.create = async (req, res, next) => {
	try {
		const employee = await User.create(req.body);

		return res.status(201).json({
			success: true,
			message: 'Employee details created successfully',
			data: employee,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Failed to create employee details',
			error: {
				error: error.message,
			},
		});
	}
};

exports.list = async (req, res, next) => {
	try {
		const employees = await User.find({
			role: 'employee',
		});

		return res.status(201).json({
			success: true,
			message: 'Employees details',
			data: employees,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Failed to fetch employee details',
		});
	}
};

exports.update = async (req, res, next) => {
	try {
		const employee = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		return res.status(201).json({
			success: true,
			message: 'Employees details updated successfully',
			data: employee,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Failed to update employee details',
		});
	}
};

exports.remove = async (req, res, next) => {
	try {
		const employee = await User.findByIdAndRemove(req.params.id);

		return res.status(201).json({
			success: true,
			message: 'Employees details removed successfully',
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Failed to remove employee details',
		});
	}
};
