// require('dotenv').config
require("dotenv").config({
    path: require("path").join(__dirname, "../.env")
});
const express = require('express')
const connectDB = require('./config/db')
const job = require('./config/cron')
const fs = require('fs')
const path = require('path')
const {clerkMiddleware } = require("@clerk/express")
const cors = require('cors');



const app = express()
app.use(express.json())
app.use(cors({origin:process.env.FRONTEND_URL, credentials:true}))

app.use(clerkMiddleware())

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

const publicDir = path.join(process.cwd(),'public')
if(fs.existsSync(publicDir)){
    app.use(express.static(publicDir))
    app.get("/{*any}",(req,res,next)=>{
        res.sendFile(path.join(publicDir,'index.html'),(err)=>next(err))
    })
}

app.listen(5000,()=>{
    connectDB()
    console.log("server running")

    if(process.env.NODE_ENV === 'production') job.start()
})

