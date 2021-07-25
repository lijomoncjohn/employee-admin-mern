const express = require('express');

const { authenticate } = require('../hepers/auth');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/token').post(AuthController.login);

router.route('/logout').delete(authenticate, AuthController.logout);

router.route('/password/recover').post(AuthController.recoverPassword);

router.route('/password/reset/:token').post(AuthController.resetPassword);

module.exports = router;
