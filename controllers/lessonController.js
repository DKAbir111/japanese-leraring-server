const Lesson = require('../models/LessonModel');


const addlesson = async (req, res) => {
    try {
        const { lessonName, lessonNumber } = req.body;

        const newLesson = new Lesson({ lessonName, lessonNumber });
        await newLesson.save();

        res.status(201).json({ message: 'Lesson added successfully' });
    } catch (err) {

        res.status(500).json({ message: 'Something went wrong', error: err.message });

    }
};

module.exports = {
    addlesson
};