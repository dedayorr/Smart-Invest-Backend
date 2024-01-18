const mongoose = require("mongoose");

const dbconnect = () =>{
    return mongoose.connect(process.env.MONGO_URL)
}

module.exports = dbconnect;