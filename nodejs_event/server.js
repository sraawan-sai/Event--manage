const express = require("express");
const app = express()
const cors = require('cors');
const connectDB = require("./utilities/db");
const eventRouter = require("./routes/eventRoutes");
const RegisterSchema = require("./schemas/RegisterSchema");
const registerRoute = require("./routes/registerRoutes");

//middelware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//cconnect to mongoDb
connectDB()

app.use("/event",eventRouter)
app.use("/register",registerRoute)


app.listen(3000,()=>{
    console.log('Express Sever started')
})