const Vocabulary = require('../models/VocabularyModel');


const addVocabulary = async (req, res) => {
    try {
        const { word,
            pronunciation,
            whenToSay,
            lessonNo,
            adminEmail } = req.body;

        const newVocabulary = new Vocabulary({
            word,
            pronunciation,
            whenToSay,
            lessonNo,
            adminEmail
        });
        await newVocabulary.save();

        res.status(201).json({ message: 'Lesson added successfully' });
    } catch (err) {

        res.status(500).json({ message: 'Something went wrong', error: err.message });

    }
};

//fetch all
const fetchVocabulary = async (req, res) => {
    try {
        const allVocabulary = await Vocabulary.find();

        res.json(allVocabulary);
    } catch (error) {
        console.error("Error fetching vocabulary:", error);
        res.status(500).json({ message: "Failed to fetch vocabulary" });
    }
};

//fetch by id
const findVocabularyById = async (req, res) => {
    try {
        const vocabulary = await Vocabulary.findById(req.params.id);
        if (!vocabulary) {
            return res.status(404).json({ message: "Vocabulary not found" });
        }
        res.json(vocabulary);
    } catch (error) {
        console.error("Error finding vocabulary:", error);
        res.status(500).json({ message: "Failed to find vocabulary" });
    }
};

//find and update
const editVocabulary = async (req, res) => {
    try {
        const updatedVocabulary = await Vocabulary.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedVocabulary) {
            return res.status(404).json({ message: "Vocabulary not found" });
        }
        res.json(updatedVocabulary);
    } catch (error) {
        console.error("Error updating vocabulary:", error);
        res.status(500).json({ message: "Failed to update vocabulary" });
    }
};

//delete
const deleteVocabulary = async (req, res) => {
    try {
        const deletedVocabulary = await Vocabulary.findByIdAndDelete(req.params.id);
        if (!deletedVocabulary) {
            return res.status(404).json({ message: "Vocabulary not found" });
        }
        res.json({ message: "Vocabulary deleted successfully" });
    } catch (error) {
        console.error("Error deleting vocabulary:", error);
        res.status(500).json({ message: "Failed to delete vocabulary" });
    }
};


module.exports = {
    addVocabulary,
    fetchVocabulary,
    findVocabularyById,
    deleteVocabulary,
    editVocabulary
};