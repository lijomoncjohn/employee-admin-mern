const express = require('express');

const EmployeeController = require('../controllers/employee.controller');

const router = express.Router();

router.route('/').post(EmployeeController.create).get(EmployeeController.list);

router
	.route('/:id')
	.put(EmployeeController.update)
	.delete(EmployeeController.remove);

module.exports = router;
