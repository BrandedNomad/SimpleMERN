const Express = require('express')
const User = require('../models/User')
const ModelV0 = require("../../index.model")
const auth = require('../../../../middleware/auth')


//Creating a router
const router = Express.Router();


//Registers a new user
router.post("/register", async (req,res)=>{
    //get user provided details
    const userProvided = req.body

    //Check if user allready exist
    const doesExist = await ModelV0.User.findByCredentials(userProvided.email,userProvided.password)

    let user;
    let token;
    //instantiate new User
    if(doesExist === false){
        user = await new ModelV0.User(req.body)
        //upload image to filestore
        token = await user.generateAuthToken()
        res.status(200).send({user,token})
    } else {
        res.status(400).send("User not found")
    }

})

//logs in an existing user
router.post("/auth",async (req,res)=>{
    //get user provided details
    const userProvided =  req.body

    //Check if user exists
    const user = await ModelV0.User.findByCredentials(userProvided.email,userProvided.password)

    if(user === false){
        res.status(404).send({error: "User not found"})
    }else{
        const token = await user.generateAuthToken()
        res.status(200).send({user,token})
    }

})

//Gets a user by id
router.get('/:id',auth,async (req,res)=>{
    const _id = req.params.id
    const user = await ModelV0.User.findOne({_id})
    res.send(user)
})

//logs out user
router.post('/logout', auth, async(req,res)=>{

    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })

        await req.user.save()

        res.send("successfully logged out")
    }catch(error){
        res.status(500).send()

    }
})

//deletes user
router.delete('/delete',auth,async(req,res)=>{
    console.log(req.user._id)
    try{

        const deletedUser = await User.findByIdAndDelete(req.user._id)
        if(!deletedUser){
            res.status(404).send()
        }

        res.status(200).send(deletedUser)

    }catch(error){
        res.status(500).send()
    }
})








module.exports = router;
