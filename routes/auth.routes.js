const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Registration route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Logout route
router.post('/logout', authController.logout);

// Get logged in user route
router.get('/user', authController.getLoggedUser);

module.exports = router;
