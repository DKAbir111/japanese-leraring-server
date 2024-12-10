const express = require('express')
const { addlesson } = require('../controllers/lessonController')

const router = express.Router();

router.post('/lesson', addlesson)

module.exports = router;