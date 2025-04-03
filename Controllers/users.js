const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const jwt=require('jsonwebtoken');
require ('dotenv').config();

const router = express.Router();

exports.signUp= async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        
          if(!name || !username || !email || !password){
            return res.status(400).json({
                status:false,
                message:"All fields are required",
            })
          }
      
        const existingUser = await User.findOne({
            where: { username },
        });
        if (existingUser) {
            return res.json({
                success:false,
                message: "Username already taken",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, username, email, password: hashedPassword });
        await newUser.save();

        res.status(200).json({ 
            success:true,
            message: "You are signed up", newUser });
    } catch (e) {
        console.error(e);
        res.json({ message: "Server error" });
    }
};



exports.signIn= async (req, res) => {

   try{

    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"all fields are required",
        })
    }


    const user =await User.findOne({email});
    if(!user){
        return res.staus(401).json({
            success:false,
            message:"user is not present.Please,Signup first",
        })
    }

if(bcrypt.compare(user.password,password)){

const payload={
    email:user.email,
    id:user.id,
    accountType:user.accountType,
}

const token=jwt.sign(payload,process.env.JWT_SECRET,{
    expiresIn:'2h'
});

user.token=token;
user.password=undefined;


res.status(200).json({
    success:true,
    token,
    user,
    message:"User logged in Successfully"
});



}else{
    return res.status(400).json(({
        success:false,
        messsage:"Incorrect password",
    }))
}

   }
   catch(error){
console.log(error);
return res.status(401).josn({
    success:false,
    message:"Login failed.....,Please try again"
})

   }
 
};

module.exports = router;


