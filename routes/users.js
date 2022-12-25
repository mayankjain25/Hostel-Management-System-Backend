const express = require('express')
const router = express.Router()
const User = require('../models/schema')
const cors = require('cors')

router.use(cors())


router.get('/',(req,res)=>{
    res.send('Hello world')
})


//Get a particular user from the database
router.get('/:id', async (req, res)=>{
    const reply = await User.findOne({email:req.params.id})
    console.log(reply)
    res.send(reply)
}
)

module.exports = router