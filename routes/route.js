const express = require("express");
const router = express.Router();

const { signIn, signUp } = require("../Controllers/users");

const { Auth } = require("../middlewares/Auth");

router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
