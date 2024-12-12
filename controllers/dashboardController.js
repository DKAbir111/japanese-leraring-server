const User = require('../models/UserModel');
const Vocabulary = require('../models/VocabularyModel');
const Lesson = require('../models/LessonModel');

const getDashboardData = async (req, res) => {
    try {

        const totalUsers = await User.countDocuments();

        const totalAdmins = await User.countDocuments({ role: "admin" });

        const totalVocabulary = await Vocabulary.countDocuments();

        const totalLessons = await Lesson.countDocuments();

        res.status(200).json({
            totalUsers,
            totalAdmins,
            totalVocabulary,
            totalLessons,
        });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

module.exports = { getDashboardData };
