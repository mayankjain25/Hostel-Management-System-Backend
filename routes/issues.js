const express = require('express')
const router = express.Router()
const User = require('../models/schema')
const Issue = require('../models/issueSchema')
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


module.exports = router

