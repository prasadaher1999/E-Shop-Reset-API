const { string } = require("joi");
const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

//creating schema
const categorySchema = new Schema({
    name:{type:String,required:true},
},{timestamps:{createdAt:"created_at",updatedAt:"updated_at"}})

// creating model

const Category = mongoose.model("categorie",categorySchema)

module.exports ={Category}