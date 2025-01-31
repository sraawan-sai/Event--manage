const express = require("express");
const Register = require("../schemas/RegisterSchema");
const Event = require("../schemas/EventSchema");
const router = express.Router();
const registerRoute = router;

//register user to event

async function registerForEvent(regId,eventId){
    const event = await Event.findById(eventId)
    if (!event) {
        throw new Error('Event not found');
    }
    event.registerUsers.push(regId)
    await event.save();
}

registerRoute.post('/',async(req,res)=>{

    const {regName,regEmail,regPhone,eventId} = req.body
    console.log(req.body,"regdata")

    try{
        const createReg = new Register({
            regName,
            regEmail,
            regPhone,
            eventId
        })
        await createReg.save();
        await registerForEvent(createReg._id,eventId)
        res.status(201).json({message:"User Registred",data: createReg})
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
})

registerRoute.get("/",async (req,res) =>{
    try{
        const regGet = await Register.find();
        if(!regGet || regGet.length === 0){
            regGet.status(400).json({message:"register data not found"})
        }
        res.status(201).json(regGet)
    }catch(error){
        res.status(500).json({error:error.messge})
    }
   
})

module.exports = registerRoute;