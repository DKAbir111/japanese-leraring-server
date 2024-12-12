const Tutorial = require('../models/TutorialModel');


exports.addTutorial = async (req, res) => {
    const { tutorialName, tutorialUrl } = req.body;

    try {
        const newTutorial = new Tutorial({
            tutorialName,
            tutorialUrl,
        });

        await newTutorial.save();
        res.status(201).json({ message: 'Tutorial added successfully!', tutorial: newTutorial });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add tutorial', error: error.message });
    }
};

// Controller for getting all tutorials
exports.getTutorials = async (req, res) => {
    try {
        const tutorials = await Tutorial.find();
        res.status(200).json(tutorials);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve tutorials', error: error.message });
    }
};
