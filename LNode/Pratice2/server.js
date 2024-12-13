const http=require('http')
const {requestHandler} =require('./Handel')
const server=http.createServer(requestHandler)

server.listen(3004,()=>{
    console.log("Calculator File is running ")
})