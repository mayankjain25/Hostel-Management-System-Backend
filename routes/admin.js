const router= require('express').Router();
const Admin = require('../models/adminSchema');

router.post('/createAdmin',async (req,res)=>{
    // console.log(req.body)
    const admin = await Admin.create(req.body);
    if(!admin){
        res.send({error:'Admin not created'})
    }

    res.send({status:'Admin Successfully Created'})
})

router.post('/login',async (req,res)=>{
    const admin = await Admin.findOne({email:req.body.email})
    if(!admin){
        res.status(404)
        res.send()
    }
    if(admin.password!=req.body.password){
        res.status(404).send()
    }
    else res.send({status:'Login Successful'})
})

module.exports=router