const express = require('express')
const dotenv = require('dotenv').config
const connectDB = require('./config/db')
const fs = require('fs')
const path = require('path')
const {clerkMiddleware } = require("@clerk/express")



const app = express()

connectDB()

app.use(express.json())
app.use(cors({origin:"http://localhost:5173", Credential:true}))
app.use(clerkMiddleware())

const publicDir = path.join(process.cwd,'public')
if(fs.existsSync(publicDir)){
    app.use(express.static(publicDir))
    app.get("/{*any}",(req,res,next)=>{
        res.sendFile(path.join(publicDir,'index.html'),(err)=>next(err))
    })
}

app.listen(5000,()=>console.log("server running"))

