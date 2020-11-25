/**
 * @overview Server created with Node Express
 *
 */

//imports
const Express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require("./controller/v0/index.router");
const mongoose = require('mongoose');

//creating a server instance
const server = Express()
const port = process.env.PORT

//configuring server
server.use(bodyParser.json())


//CORS POLICY middleware
server.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

//Setting up Root URI call
server.use('/api/v0/', indexRouter);


//Starting the server

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false},(error,response)=>{

    if(error){
        return console.log("Could not connect to database",error)
    }

    console.log("Successfully connected to database")

    server.listen(port,(error,response)=>{
        if(!error){
            console.log("Server up and running on port: " + port)
        }else{
            console.log("Unable to start server: ", error)
        }

    })
});


