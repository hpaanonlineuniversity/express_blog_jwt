const userController = require('../Controller/auth_controller');
const express = require('express');
const router = express.Router();

// User registration
router.post('/register', userController.register);


// User login
router.post('/login', userController.login);

router.post('/logout', userController.logout);



module.exports = router;