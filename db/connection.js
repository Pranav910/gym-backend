const mongoose = require('mongoose')

const connectDB = async () => {

    try {

        await mongoose.connect("mongodb://localhost:27017/testDB")
        console.log("SERVER SUCCESSFULLY CONNECTED TO DATA BASE WITH HOST : ", mongoose.connection.host);

    } catch (error) {
        console.log("CONNECTION TO DATA BASE FAILES DUE TO : ", error)
        process.exit(1)
    }

}

module.exports = connectDB