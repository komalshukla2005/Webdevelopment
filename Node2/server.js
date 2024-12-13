const http=require('http')

const makeServer=http.createServer((req,res)=>{
    res.end("Hey i running throw the nodemon")
})

makeServer.listen(3004,()=>{
    console.log("Your code is running correctly ")
})