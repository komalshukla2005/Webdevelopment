const fs=require('fs')
const http=require('http')
const path=require('path')

const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        const filePath = path.join(__dirname, 'views', 'index.html');

        fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
                return res.end("Something went wrong in your code")
            }res.end(data)
        })
    }else if(req.url==='/men' && req.method==='GET'){
        res.end("<h1>Welcome To the mens Section </h1>")
    }
    else if(req.url==='/women' && req.method==='GET'){
        res.end("<h1>Welcome To the Women Section </h1>")
    }
    else if(req.url==='/kids' && req.method==='GET'){
        res.end("<h1>Welcome To the kids Section </h1>")
    }
    else if(req.url==='/cart' && req.method==='GET'){
        res.end("<h1>Welcome To the Cart </h1>")
    }
})

server.listen(3003,()=>{
    console.log("I am running bro")
})

