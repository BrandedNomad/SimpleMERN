const Express = require('express');
const userRouter = require('./users/routes/user.router.js')


const router = Express.Router();

router.use('/user', userRouter);

module.exports = router;
