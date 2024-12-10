const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', () => {
    res.send('Hello World!')
})


//Database Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch((err) => console.error('Error connecting to database:', err));