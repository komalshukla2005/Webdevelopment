const fs=require('fs')
const path=require('path')
const {AddTowNumbers} =require('./Addision')

const requestHandler=(req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        const FilePath=path.join(__dirname,'views','index.html')
        fs.readFile(FilePath,'utf-8',(err,data)=>{
            if(err){
                return res.end("Something went wrong in your code ")
            }res.end(data)
        })
    }else if(req.url==='/add' && req.method==='GET'){
        const FilePath=path.join(__dirname,'views','Add.html')
        fs.readFile(FilePath,'utf-8',(err,data)=>{
            if(err){
                return res.end("Something went wrong in your code ")
            }res.end(data)
        })
    }else if(req.url==='/add' && req.method==='POST'){
        AddTowNumbers(req,res)
    }else{
        res.end("404 Page not Found")
    }

}
exports.requestHandler=requestHandler;