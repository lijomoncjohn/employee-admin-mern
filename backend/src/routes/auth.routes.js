const express = require('express');

const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/token').post(AuthController.login);

module.exports = router;
