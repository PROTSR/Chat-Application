const express = require('express')
const dotenv = require('dotenv').config
const connectDB = require('./config/db')

const {clerkMiddleware } = require("@clerk/express")


const app = express()

connectDB()

app.use(express.json())
app.use(cors({origin:"http://localhost:5173/", Credential:true}))
app.use(clerkMiddleware())



app.listen(5000,()=>console.log("server running"))

