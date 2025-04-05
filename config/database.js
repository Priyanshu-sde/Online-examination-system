
const mongoose=require("mongoose");  


exports.connect=()=>{
    mongoose.connect("mongodb+srv://priyanshusde:EeLDkYLEoBzsp7Tt@cluster0.kp9pk.mongodb.net/exam-system")
    .then(()=>{
        console.log("DB connection successfull");
    })
    .catch((error)=>{
        console.log("DB connection failed");
        console.log(error);

        process.exit(1);

    });
}