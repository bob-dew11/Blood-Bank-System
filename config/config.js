const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Database Connected ${mongoose.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(`Error in database ${error}`.bgRed.white)
    }
}

module.exports = connectDB