/**
 * @overview This file contains an index for all available routes. Currently, SimpleMERN only has one route.
 *
 */

//imports
const Express = require('express');
const userRouter = require('./users/routes/user.router.js')

//Creating a router object
const router = Express.Router();

//Setting up user routes
router.use('/user', userRouter);


//exports
module.exports = router;
