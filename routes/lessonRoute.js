const express = require('express');
const router = express.Router();
const {
    addlesson,
    getLessons,
    getLessonById,
    updateLesson,
    deleteLesson,
} = require('../controllers/lessonController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Routes
router.post('/add-lesson', authenticateToken, addlesson);
router.get('/lessons', getLessons);
router.get('/lessons/:id', getLessonById);
router.put('/lessons/:id', authenticateToken, updateLesson);
router.delete('/lessons/:id', authenticateToken, deleteLesson);

module.exports = router;
