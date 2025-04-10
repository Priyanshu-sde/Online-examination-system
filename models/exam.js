
const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'question'
    }]

});

const questionSchema = new mongoose.Schema({
    title : {type: String, required : true},
    description : String,
    type : String,
    answer : String,
    options : [{type: String}]   
})

const exam = mongoose.model("exam", examSchema);
const question = mongoose.model("question", questionSchema);

module.exports = {
    exam,
    question
};