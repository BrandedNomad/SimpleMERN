const express = require('express')
const path = require('path');

const server = express()
const port = process.env.PORT

server.use(express.static(path.join(__dirname,'build')))

server.get('/',async (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, 'build','index.html'))
})

server.listen(port,()=>{
    console.log("Server up and running on port: ", port)
})


