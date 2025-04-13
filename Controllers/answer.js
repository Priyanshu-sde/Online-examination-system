const Answer = require('../models/AnswerSchema');
const {question } = require("../models/exam.js");



exports.submitAnswer = async (req, res) => {
    try {
        // const { examId, userId } = req.params;
        const {examId,userId, attempt, answer } = req.body;

    
        if (!examId || !userId || !attempt || !answer) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

       
        const payload = new Answer({
            userId,
            examId,
            attempt,
            answer,
        });

       
        await payload.save();

        return res.status(200).json({
            success: true,
            message: "Answers submitted successfully"
        });
    } catch (error) {
        console.error("Error while submitting answer:", error);
        res.status(500).json({
            success: false,
            message: "An internal error occurred while submitting the answer. Please try again later."
        });
    }
};


exports.getResult = async (req, res) => {
    try {
        const { examId, userId } = req.body;

       
        const response = await Answer.findOne({ examId, userId });


        if (!response) {
            return res.status(404).json({ 
                success: false,
                message: "No result is related to this user and exam"
            });
        }



        const answerArray = response.answer;

        let correct = 0;

     
        for (const element of answerArray) {
            const questionData = await question.findById(element.question);
            if (questionData && questionData.answer === element.response) {
                correct++;
            }
        }

        return res.status(200).json({
            success: true,
            totalQuestions: answerArray.length,
            score: correct,
            percentage: (correct / answerArray.length) * 100 
        });

    } catch (error) {
        console.error("Error in calculating score:", error);

        return res.status(500).json({
            success: false,
            message: "An internal error occurred while calculating the score. Please try again later."
        });
    }
};
