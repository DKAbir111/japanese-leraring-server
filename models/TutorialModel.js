const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
    tutorialName: { type: String, required: true },
    tutorialUrl: { type: String, required: true },
});

module.exports = mongoose.model('Tutorials', tutorialSchema);
