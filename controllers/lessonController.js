const Lesson = require('../models/LessonModel');

// Add a new lesson
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

// Get all lessons
const getLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find();
        res.status(200).json(lessons);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

// Get a lesson by ID
const getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(lesson);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

// Update a lesson by ID
const updateLesson = async (req, res) => {
    try {
        const { lessonName, lessonNumber } = req.body;
        const lesson = await Lesson.findByIdAndUpdate(
            req.params.id,
            { lessonName, lessonNumber },
            { new: true }
        );

        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json({ message: 'Lesson updated successfully', lesson });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

// Delete a lesson by ID
const deleteLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndDelete(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json({ message: 'Lesson deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

module.exports = {
    addlesson,
    getLessons,
    getLessonById,
    updateLesson,
    deleteLesson,
};
