/**
 * @overview This file contains the Authorization middleware that performs authorization checks before allowing access to routes
 *
 */

//imports
const jwt = require('jsonwebtoken')
const User = require('../controller/v0/users/models/User.js')

/**
 * @function
 * @description Checks if the client making a request is authorized to do so
 * @param  req - object containing request params
 * @param  res -object containing response params
 * @param {function} next - calls the next function after authorization is complete
 * @returns {Promise<void>}
 */
const auth = async (req,res,next)=>{

    try{
        //gets the user token provided in the header
        const token = req.header('Authorization').replace('Bearer ','')

        //decodes the token to retrieve user id
        const decoded = jwt.verify(token,process.env.JWT_KEY)

        //checks if user id exists in the data base
        const user = await User.findOne({_id: decoded._id, 'tokens.token':token})

        //throws an Error if no user is found
        if(!user){
            throw new Error() //triggers the catch statement beneath
        }

        //passing user credentials on to route callback
        req.token = token
        req.user = user
        next()

    }catch(error){
        res.status(401).send({error:'Please authenticate.'})
    }
}

module.exports = auth;
