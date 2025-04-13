const mongoose = require("mongoose");
const { exam, question } = require("./exam");
const User = require("./User");

const AnswerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User" 
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "exam" 
    },
    attempt: {
        type: Number,
        required: true
    },
    answer: [{
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "question",
            required: true
        },
        response: {
            type: String,
            required: true
        }
    }]
});

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;
