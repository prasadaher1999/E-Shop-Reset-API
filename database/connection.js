const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/ecomm";

async function createConnection() {
    
    console.log("creating connection...");

    const connection = await mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})

    if(connection){
        console.log("connected !!!");
    }else{
        console.log("failed to connect db")
    }

}

module.exports = { createConnection }