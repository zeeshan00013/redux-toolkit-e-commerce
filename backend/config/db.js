const mongoose = require('mongoose')
const colors = require('colors')

const connectDB =async () =>{
    try {
        const connc =await mongoose.connect(process.env.MONGO_URI)
            console.log(`database connected ${connc.connection.host}`.bgBlue.bold); 
    } catch (error) {
        console.log(`mongodb error ${error}`.bgRed.white);
        
    }
}
module.exports = connectDB;
