const Express = require('express')

const router = Express.Router();


router.get('/:id',async (req,res)=>{
    res.send("You made it!")
})


module.exports = router;
