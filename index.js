const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const lessonRoute = require('./routes/lessonRoute');
const vocabularyRoute = require('./routes/VocabularyRoute');
const verificationRoute = require('./routes/verificationRoute');


require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/auth", authRoutes);
app.use("/api", lessonRoute);
app.use("/api", vocabularyRoute);
app.use("/api/verify", verificationRoute);

// Database Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch((err) => console.error('Error connecting to database:', err));
