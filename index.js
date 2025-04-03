const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/route.js");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://priyanshusde:EeLDkYLEoBzsp7Tt@cluster0.kp9pk.mongodb.net/exam-system");

app.use("/user",user)

app.listen(3000, () => {
    console.log("server started");
})