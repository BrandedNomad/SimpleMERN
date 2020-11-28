const Express = require('express')
const User = require('../models/User')
const ModelV0 = require("../../index.model")
const auth = require('../../../../middleware/auth')
const {getPutSignedUrl,getSignedUrl,deleteFiles} = require('../../../../aws')


//Creating a router
const router = Express.Router();


//Registers a new user
router.post("/register", async (req,res)=>{
    //get user provided details
    const userProvided = req.body

    //Check if user already exist
    const doesExist = await ModelV0.User.findByCredentials(userProvided.email,userProvided.password)

    let user;
    let token;
    let signedURL;
    //instantiate new User
    if(doesExist === false){

        //create user
        user = await new ModelV0.User(req.body)

        //create a token
        token = await user.generateAuthToken()

        //request put url
        signedURL = getPutSignedUrl(req.body.avatar)

        //send results
        res.status(200).send({user,token,signedURL})
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
router.get('/profile',auth,async (req,res)=>{
    const user = req.user
    console.log("profileRoute", user)
    //const user = await ModelV0.User.findOne({_id})
    if(user !== undefined){
        const signedURL = getSignedUrl(user.avatar)
        console.log("profileSigned", signedURL)

        res.send({user,signedURL})
    }

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
    try{

        deleteFiles(req.user.avatar)
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
