const express = require('express');
const router = express.Router();

const {getExamData, addExam, addQuestion} = require('../Controllers/exam');


router.post("/addQuestion", addQuestion);
router.post("/addExam", addExam);
router.get("/:examId", getExamData);
module.exports = router;