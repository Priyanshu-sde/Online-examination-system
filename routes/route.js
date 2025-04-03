const express = require("express");
const router = express.Router();

const { signIn, signUp } = require("../Controllers/users");

const { Auth } = require("../middlewares/Auth");

router.use("/signUp", signUp);
router.use("/signIn", signIn);

module.exports = router;
