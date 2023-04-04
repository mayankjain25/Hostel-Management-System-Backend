const express = require('express')
const router = express.Router()
const User = require('../models/schema')
const Issue = require('../models/issueSchema')
const ObjectId = require('mongodb').ObjectId; 

// const cors = require('cors')

// router.use(cors())

router.get('/',(req,res)=>{
    res.send('Issues page')
})

router.post('/:id',async (req,res)=>{

    console.log(req.body)
    const issue = {
        title:req.body.title,
        description:req.body.description,
        status:req.body.status,
        priority:req.body.priority,
        student:req.params.id.substring(1,req.params.id.length-1)
    }

    const newIssue = await Issue.create(issue)
    if(!newIssue){
        res.send({error:'Issue not created'})
    }
    // console.log(issue)
    // issue.save()
    res.send('ok')
})

router.get('/:id', async (req, res)=>{
    const id = req.params.id.substring(1,req.params.id.length-1);
    const reply = await Issue.find({student:ObjectId(req.params.id)})
    if(!reply){
        res.send('User not found')
    }
    console.log(reply)
    // console.log(reply.json())
    res.send(reply)

})



module.exports = router

