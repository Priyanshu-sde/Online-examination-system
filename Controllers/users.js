const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signUp = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

     
        if (!name || !username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

      
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Username already taken",
            });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await User.create({
            name,
            username,
            email,
            password: hashedPassword,
        });

 

        res.status(201).json({
            success: true,
            message: "You have successfully signed up",
            newuser: newUser,
        });
    } catch (error) {
        console.error("Error during signUp:", error.message);
        res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
};

exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

     
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

   
        const user = await User.findOne({ email });
        console.log("user is ",user);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found. Please sign up first.",
            });
        }

   
        const isPasswordMatch = await bcrypt.compare(password, user.password);
      
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

  
        const payload = { email: user.email, id: user.id, accountType: user.accountType };
        
        const token = jwt.sign(payload,"ExaminationSystem", { expiresIn: "2h" });
       
        user.password = undefined;

        res.status(200).json({
            success: true,
            token,
            user,
            message: "User logged in successfully",
        });
    } catch (error) {
        console.error("Error during signIn:", error.message);
        res.status(500).json({
            success: false,
            message: "Login failed. Please try again later.",
        });
    }
};




exports.findUser = async (req, res) => {
    try {
       
        const users = await User.find({});
console.log("All users in the database:", users);
        if (!users || users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No users found",
            });
        }

        res.status(200).json({
            success: true,
            users,
            message: "All users retrieved successfully",
        });
    } catch (error) {
        console.error("Error during finding all user:", error.message);
        res.status(500).json({
            success: false,
            message: "not found users",
        });
    }
};
