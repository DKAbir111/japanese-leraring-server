const express = require('express');
const router = express.Router();

// Import controllers
const {
    addVocabulary,
    fetchVocabulary,
    findVocabularyById,
    editVocabulary,
    deleteVocabulary,
    fetchVocabularyByLessonNo
} = require('../controllers/vocabularyController');

// Import authentication middleware
const { authenticateToken } = require('../middleware/authMiddleware');


router.post('/add-vocabulary', authenticateToken, addVocabulary);


router.get('/all-vocabulary', fetchVocabulary);

router.get('/vocabulary/:id', findVocabularyById);


router.put('/vocabulary/:id', authenticateToken, editVocabulary);


router.delete('/vocabulary/:id', authenticateToken, deleteVocabulary);
router.get('/lesson/:lessonNo/vocabulary', fetchVocabularyByLessonNo);


module.exports = router;
