const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();
const { verification } = require('../controllers/verificationController')


router.get('/profile', authenticateToken, verification);
module.exports = router;