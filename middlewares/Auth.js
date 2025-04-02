require('dotenv').config();
const jwt=require('jsonwebtoken');

exports.auth=async(req ,res,next)=>{
    try{
          const token=req.body;

          if(!token){
            return res.status(400).json({
                status:false,
                message:"Token is not found",
            })
          }

         try{

            const decode=jwt.verify(token,process.eve.JWT_SECRET);
            req.user=decode;

         }
         catch(error){
            return res.status(401).json({
                success:false,
                message:"Token is Invalid"
            })
         }


next();

    }
    catch(error){
  return res.status(401).json({
    stauts:false,
    message:"somethine went wrong while verifying token",
  })
    }
}


exports.isStudent=async(req,res)=>{
    try{


        const user=req.user;

         if(req.user.accountType!=='Student'){
            return res.status(400).json({
                 status:false,
                 message:"this is protected route for student",
            })
         }

      next();

    }
    catch(error){
        return res.status(401).json({
            status:false,
            message:" Student Account type cannot be verified",
        })
    }
}




exports.isAdmin=async(req,res)=>{
    try{


        const user=req.user;

         if(req.user.accountType!=='Admin'){
            return res.status(400).json({
                 status:false,
                 message:"this is protected route for Admin",
            })
         }

      next();

    }
    catch(error){
        return res.status(401).json({
            status:false,
            message:" Admin Account type cannot be verified",
        })
    }
}