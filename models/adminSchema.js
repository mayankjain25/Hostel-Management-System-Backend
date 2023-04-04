const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    hostelName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.models.Admin || mongoose.model('Admin',adminSchema)