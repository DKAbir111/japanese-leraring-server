const express = require('express');
const { getDashboardData } = require('../controllers/dashboardController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', authenticateToken, getDashboardData);

module.exports = router;
