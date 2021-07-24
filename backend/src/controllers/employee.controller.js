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
		let query;

		const reqQuery = { ...req.query, role: 'employee' };

		const removeFields = ['select', 'sort', 'page', 'limit'];

		removeFields.forEach((param) => delete reqQuery[param]);

		let queryString = JSON.stringify(reqQuery);

		queryString = queryString.replace(
			/\b(gt|gte|lt|lte)\b/g,
			(match) => `$${match}`
		);

		query = User.find(JSON.parse(queryString));

		if (req.query.select) {
			const fields = req.query.select.split(',').join(' ');
			query = query.select(fields);
		}

		if (req.query.sort) {
			const sortBy = req.query.sort.split(',').join(' ');
			query = query.sort(sortBy);
		} else {
			query = query.sort('-createdAt');
		}

		const page = parseInt(req.query.page, 10) || 1;
		const limit = parseInt(req.query.limit, 10) || 25;
		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const queryResult = await query;

		const total = queryResult.length;

		query = query.skip(startIndex).limit(limit);

		const result = await query;

		const pagination = {};

		if (endIndex < total) {
			pagination.next = {
				page: page + 1,
				limit,
			};
		}

		if (startIndex > 0) {
			pagination.prev = {
				page: page - 1,
				limit,
			};
		}

		return res.status(201).json({
			success: true,
			message: 'Employees details',
			totalCount: total,
			count: result.length,
			pagination: pagination,
			data: result,
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
