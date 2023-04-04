const mongoose = require('mongoose')
// import {Schema} from 'mongoose'

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollNumber:{
        type:Number,
        required:true, 
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true
    },
    hostelName:{
        type:String,
        required:true
    },
    roomNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

// console.log('I am in model page')

module.exports = mongoose.models.User || mongoose.model('User',userSchema) //check if 'User' model is already defined, if not, then it explicitly defines it