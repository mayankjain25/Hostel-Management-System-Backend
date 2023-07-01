const express = require('express')
const router = express.Router()
const User = require('../models/schema')
// const cors = require('cors')

// router.use(cors())


router.get('/',(req,res)=>{
    res.send('Hello world')
})


//Get a particular user from the database
router.get('/:id', async (req, res)=>{
    const reply = await User.findOne({email:req.params.id})

    if(!reply){
        res.send('User not found')
    }
    console.log(reply)
    res.send(reply)
}
)

router.post('/',async (req, res)=>{
            const user = await User.create(req.body)
            if(!user){
                return res.status(400).send({error: 'User could not be created'})
            }
            else{
                res.status(200).send(user)
            }
})

module.exports = router