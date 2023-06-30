const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    hostelName:{
        type: String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    priority:{
        type:Number,
        required:true
    },
    student: mongoose.Schema.Types.ObjectId 

})



module.exports = mongoose.models.Issue || mongoose.model('Issue',issueSchema)