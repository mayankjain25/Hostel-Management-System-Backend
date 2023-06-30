const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    employeeNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.models.Admin || mongoose.model('Admin',adminSchema)