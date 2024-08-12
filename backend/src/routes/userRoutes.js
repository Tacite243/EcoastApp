const express = require('express');
const { registerUser, loginUser, getUserById } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', authMiddleware, getUserById);

module.exports = router;