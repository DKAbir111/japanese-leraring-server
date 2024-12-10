const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
    lessonName: { type: String, required: true, unique: true },
    lessonNumber: { type: String, required: true, unique: true },

});

module.exports = mongoose.model('Lesson', lessonSchema);
