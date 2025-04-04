const express = require("express");
const mongoose = require("mongoose");

const user = require("./routes/route.js"); 
const database = require("./config/database.js");



const app = express();

app.use(express.json());

database.connect()
app.use("/user", user);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
