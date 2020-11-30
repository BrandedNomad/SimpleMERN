/**
 * @overview this file contains the User model (ORM)
 *
 */

//imports
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Creating a User Schema
const userSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please provide a valid email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:6,
        validate(value){
            if(value.toLowerCase().includes("password") || value.toLowerCase().includes(this.name)){
                throw new Error('Password cannot be "password" or your name!')
            }
        }
    },
    avatar:{
        type:String,
        required:true,
        trim:true
    },
    tokens:[{
        token:{
            type:String
        }
    }],

},{timestamps:true})


//instance methods

//Hides sensitive data by returning only public data
userSchema.methods.toJSON = function(){
    const user = this;
    const publicUserInfo = user.toObject();
    delete publicUserInfo.password
    delete publicUserInfo.tokens;
    return publicUserInfo
}

//Generates a Web Token for session
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({_id:user._id.toString()},process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token:token})
    await user.save();
    return token;
}

//Object methods
userSchema.statics.findByCredentials = async (email,password)=>{

    //Check if email exists
    const user = await User.findOne({email}).catch((error)=>{
        console.log(error)
    })

    //Throw error if email not found
    if(!user){
        return false
    }

    //Check if passwords match
    const isMatch = await bcrypt.compare(password,user.password).catch((error)=>{
        console.log(error)
    })

    //Throw an error if passwords don't match
    if(!isMatch){
        return false
    }

    //Return user if found
    return user
}

//MIDDLEWARE

//Hash password before saving user to ensure plaintext password is never saved to database
userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})

//Creates the User Model
const User = mongoose.model('User',userSchema)

//exports
module.exports = User;
