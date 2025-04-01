const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User.js");

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        const existingUser = await User.findOne({
            where: { username },
        });
        if (existingUser) {
            return res.json({
                message: "Username already taken",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, username, email, password: hashedPassword });
        await newUser.save();

        res.json({ message: "You are signed up", newUser });
    } catch (e) {
        console.error(e);
        res.json({ message: "Server error" });
    }
});

router.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({
        where: { username },
    });

    if (!user) {
        return res.json({ message: "Username not found" });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
        return res.json({ message: "Invalid credentials" });
    }


    //use JWT for token generation 
});

module.exports = router;