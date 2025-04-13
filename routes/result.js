const express = require('express');
const router = express.Router();
const {getResult,submitAnswer}=require("../Controllers/answer");


router.post("/submitAnswer",submitAnswer);
router.get("/getResult",getResult);
module.exports = router;