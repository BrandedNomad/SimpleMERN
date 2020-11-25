const Express = require('express')
const User = require('../models/User')
const ModelV0 = require("../../index.model")


//Creating a router
const router = Express.Router();


//Gets a user by id
router.get('/:id',async (req,res)=>{
    const _id = req.params.id
    const user = await ModelV0.User.findOne({_id})
    res.send(user)
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
        res.status(200).send(user)
    }


})


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


module.exports = router;
