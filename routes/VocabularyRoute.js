const express = require('express');
const router = express.Router();

// Import controllers
const {
    addVocabulary,
    fetchVocabulary,
    findVocabularyById,
    editVocabulary,
    deleteVocabulary
} = require('../controllers/vocabularyController');

// Import authentication middleware
const { authenticateToken } = require('../middleware/authMiddleware');


router.post('/add-vocabulary', authenticateToken, addVocabulary);


router.get('/all-vocabulary', fetchVocabulary);

router.get('/vocabulary/:id', findVocabularyById);


router.put('/vocabulary/:id', authenticateToken, editVocabulary);


router.delete('/vocabulary/:id', authenticateToken, deleteVocabulary);

module.exports = router;
