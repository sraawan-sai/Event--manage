const mongoose = require("mongoose");


const registerSchema = mongoose.Schema({
    regName:{
        type:String,
        required:true
    },
    regEmail:{
        type:String,
        required:true
    },
    regPhone:{
        type:String,
        required:true
    },
    
   
})

module.exports = mongoose.model("Register",registerSchema);