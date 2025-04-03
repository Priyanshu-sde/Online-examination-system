const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    username: {type: String, unique: true, require : true},
    email: String,
    password: String,
    accountType: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;