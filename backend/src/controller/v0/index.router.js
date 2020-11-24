const Express = require('express');
const userRouter = require('./users/routes/user.router.js')


const router = Express.Router();

router.use('/user', userRouter);

router.get('/',async (req,res)=>{
    res.send('v0')
})


module.exports = router;
