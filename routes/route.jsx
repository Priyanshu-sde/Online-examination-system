const express=require('express');
const router=express.router();


const {
    signIn,
    signUp,
}=require("../Controllers/users");

const {Auth}=require("../midddlewares/Auth");


router.post("/signUp",signUp);
router.post("/signIn",signIn);


module.exports=router;