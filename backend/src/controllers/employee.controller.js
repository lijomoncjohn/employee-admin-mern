const catchAsync = require('../helpers/catchAsync');
const User = require('../models/user.model');

exports.create = catchAsync(async (req, res, next) => {
	const employee = await User.create(req.body);

	return res.status(201).json({
		success: true,
		message: 'Employee details created successfully',
		data: employee,
	});
});

exports.list = catchAsync(async (req, res, next) => {
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
});

exports.update = catchAsync(async (req, res, next) => {
	const employee = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	return res.status(201).json({
		success: true,
		message: 'Employees details updated successfully',
		data: employee,
	});
});

exports.remove = catchAsync(async (req, res, next) => {
	const employee = await User.findByIdAndRemove(req.params.id);

	return res.status(201).json({
		success: true,
		message: 'Employees details removed successfully',
	});
});

exports.search = catchAsync(async (req, res, next) => {
	const key = req.query.k ? req.query.k.toString().trim() : '';

	let conditions = { role: 'employee' };

	if (key) {
		conditions.$or = [
			{ name: { $regex: key, $options: 'si' } },
			{ email: { $regex: key, $options: 'si' } },
			{ mobile: { $regex: key, $options: 'si' } },
			{ employeeId: { $regex: key, $options: 'si' } },
			{ address: { $regex: key, $options: 'si' } },
		];

		let age = Number(key);
		if (parseInt(age)) {
			conditions.$or = [
				{ name: { $regex: key, $options: 'si' } },
				{ email: { $regex: key, $options: 'si' } },
				{ mobile: { $regex: key, $options: 'si' } },
				{ employeeId: { $regex: key, $options: 'si' } },
				{ age: { $eq: Number(key) } },
				{ address: { $regex: key, $options: 'si' } },
			];
		}
	}

	console.log(conditions);

	const employees = await User.find(conditions);

	return res.status(201).json({
		success: true,
		message: 'Employees details found',
		data: employees,
	});
});
