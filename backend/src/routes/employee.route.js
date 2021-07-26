const express = require('express');

const employeeController = require('../controllers/employee.controller');
const { authenticate, authorize } = require('../helpers/auth');

const router = express.Router();

router.route('/search').get(employeeController.search);

router
	.route('/')
	.post(employeeController.create)
	.get(authenticate, authorize('admin'), employeeController.list);

router
	.route('/:id')
	.put(authenticate, authorize('admin'), employeeController.update)
	.delete(authenticate, authorize('admin'), employeeController.remove);

module.exports = router;
