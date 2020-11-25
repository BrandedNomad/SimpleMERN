const Express = require('express')

const router = Express.Router();


//Gets a user by id
router.get('/:id',async (req,res)=>{
    res.send("You made it!")
})

//logs in an existing user
router.post("/login",async (req,res)=>{
    //get user provided details
    const userProvided =  req.body
    console.log("yes", userProvided)
    res.status(200).send("You did it")
})


//Registers a new user
router.post("/auth", async (req,res)=>{
    //get user provided details
    const userProvided = req.body

    //Check if user already exists

    //if not, encrypt password

    //create jwt token

    //upload image to filestore

    //save user in database

    //send details
    res.status(200).send(userProvided.email)
})
module.exports = router;
