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

// Protect the add-vocabulary route and allow only 'admin' to access
router.post('/add-vocabulary', authenticateToken, addVocabulary);

// Fetch all vocabulary - no authentication required
router.get('/all-vocabulary', fetchVocabulary);

// Find vocabulary by ID - no authentication required
router.get('/vocabulary/:id', findVocabularyById);

// Edit vocabulary by ID - protected route (admin only)
router.put('/vocabulary/:id', authenticateToken, editVocabulary);

// Delete vocabulary by ID - protected route (admin only)
router.delete('/vocabulary/:id', authenticateToken, deleteVocabulary);

module.exports = router;
