const mongoose =  require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connect = async () => {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("DB Connected");
} 

module.exports = connect;