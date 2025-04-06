const express = require('express');
const router = express.Router();

const {
    signIn,
    signUp,
    findUser
} = require("../Controllers/users");

const { Auth } = require("../middlewares/Auth");

router.post("/signUp", signUp);
router.get("/signIn", signIn);
router.get("/findUser", findUser);

module.exports = router;
