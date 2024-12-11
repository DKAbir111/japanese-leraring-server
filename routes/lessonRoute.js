const express = require('express');
const router = express.Router();
const { addlesson } = require('../controllers/lessonController');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');

// Protect the route and allow only 'admin' to access
router.post('/add-lesson', authenticateToken, addlesson);

module.exports = router;
