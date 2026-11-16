const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})

const userModel = mongoose.model("User",userSchema)

export default userModel