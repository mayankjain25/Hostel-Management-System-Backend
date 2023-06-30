const express = require('express')
const router = express.Router()
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
        hostelName: req.body.hostelName,
        status:req.body.status,
        priority:req.body.priority,
        student:req.params.id.substring(1,req.params.id.length-1)
    }

    console.log(issue)

    const newIssue = await Issue.create(issue)
    if(!newIssue){
        res.send({error:'Issue not created'})
    }
    // console.log(issue)
    // issue.save()
    res.send('ok')
})

//Getting all issues by hostel name

router.get('/hostel/:hostelName', async (req, res)=>{
    const hostelName = req.params.hostelName.substring(0,req.params.hostelName.length);
    const issueData = await Issue.find({hostelName:hostelName})
    if(!issueData){{
        res.send({
            error:'No issues found'
        })
    }}
    else{
        res.send(issueData)
    }
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

