const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    try {
        const { username, email, password, photo, role = "user" } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, photo, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ message: 'Email already in use' });
        } else {
            res.status(500).json({ message: 'Something went wrong', error: err.message });
        }
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

module.exports = {
    register,
    login
};
