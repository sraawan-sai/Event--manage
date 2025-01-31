const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB,{
            dbName:'Event'
        })
        console.log('Mongodb Connected Sucessfully')
    }catch(err) {
        console.error('MongoDB connection failed:', err.message);
    }
}

module.exports = connectDB