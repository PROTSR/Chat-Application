
const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        const mongo_uri = process.env.MONGO_URI

        if(!mongo_uri){
            throw new Error("mongo uri required")
        }

        await mongoose.connect(mongo_uri)
        console.log('database connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb


