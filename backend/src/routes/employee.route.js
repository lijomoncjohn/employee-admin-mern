const express = require('express');

const EmployeeController = require('../controllers/employee.controller');
const { authenticate } = require('../hepers/authenticate');
const router = express.Router();

router
	.route('/')
	.post(authenticate, EmployeeController.create)
	.get(authenticate, EmployeeController.list);

router
	.route('/:id')
	.put(authenticate, EmployeeController.update)
	.delete(authenticate, EmployeeController.remove);

module.exports = router;
