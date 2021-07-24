const express = require('express');

const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/token').post(AuthController.login);

router.route('/password/recover').post(AuthController.recoverPassword);

router.route('/password/reset/:token').post(AuthController.resetPassword);

module.exports = router;
