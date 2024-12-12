const express = require('express');
const router = express.Router();
const tutorialController = require('../controllers/tutorialController');

// Route to add a tutorial
router.post('/tutorial', tutorialController.addTutorial);

// Route to get all tutorials
router.get('/tutorials', tutorialController.getTutorials);

module.exports = router;
