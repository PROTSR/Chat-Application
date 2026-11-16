require('dotenv').config
const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        const mongo_uri = process.env.mongo_uri

        if(!mongo_uri){
            throw new Error("mongo uri required")
        }

        await mongoose.connect(mongo_uri)
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}

export default connectDb


