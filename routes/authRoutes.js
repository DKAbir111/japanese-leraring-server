const express = require('express')
const { register, login, getAllUsers, updateUserRole } = require('../controllers/authController')
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/register', register)
router.post('/login', login)
router.get('/all-users', getAllUsers);
router.put('/update-role', authenticateToken, updateUserRole);


module.exports = router;