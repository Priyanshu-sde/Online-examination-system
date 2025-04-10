const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const jwt = require('jsonwebtoken');
const { exam, question } = require("../models/exam.js");
require('dotenv').config();

exports.getExamData = async (req,res) => {
    const examId =  req.params.examId;
    try {
        const examData = await exam.findById(examId).populate('questions');

        if (!examData){
            return res.status(404).json({message: "Exam not found"});
        }
        res.status(200).json(examData);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }        
}

exports.addQuestion = async (req,res) => {
    try {
        const {title, description, type, answer, options} = req.body;

        const newQuestion = new question({
            title,
            description,
            type,
            answer,
            options
        });

        const savedQuestion =  await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch(error) {
    console.error(error); 
        res.status(500).json({message: "Failed to add question"});
    }
}

exports.addExam = async (req,res) => {
    try{
        const {title, description, questions } = req.body;

        const newExam =  new exam({
            title,
            description,
            questions
        });

        const savedExam = await newExam.save();
        res.status(201).json(savedExam);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "failed to add exam"});
    }
}