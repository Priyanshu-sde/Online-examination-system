const express = require("express");
const mongoose = require("mongoose");

const user = require("./routes/user.js"); 
const database = require("./config/database.js");
const exam  = require("./routes/exam.js");



const app = express();

app.use(express.json());

database.connect()
app.use("/user", user);
app.use("/exam", exam)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
