// // Express js is a minimal and flexible web application framework for the Node js. it Provides a robust se of the features for the building single page ,multi-page ,and hybrid web applications.


// // middleware ek aisa function hota hai jo har route se pahle chalta hai.

// // aisa koi bhi route jiska koi hissa baar baarsame rehta hai and kuch hissa baar baar change hota hai iske liye ek dynamic route bna skte hai.


// const express=require('express')
// const app=express()
// app.set("view engine",'ejs')

// app.use(function(req,res,next){
//     console.log("Middleware is running ")
//     next()
// })

// app.use(express.static('./public'))
// app.get("/",(req,res)=>{
//     console.log("I will run before middleware")
//     res.send("Today is Sunday")
// })

// app.get("/myName/:userName",(req,res)=>{
//     res.send(`Hey Guys my name is ${req.params.userName}`)
// })

// app.get('/File',(req,res)=>{
//     res.render('index',{name:"Komal"})
// })
// // app.use(function(req,res){
// //     console.log("I am middleware 2")
// // })

// app.listen(3000,()=>{
//     console.log("The Server is running ")
// })



// const fs=require('fs')
// fs.writeFile('hey.txt',"How are you dear and what are you doing here ",function(err){
//     if(err)console.log("Error")
//     else console.log("Done")
// })

// console.log(__dirname)


const express=require('express')
const app=express()
app.set("view engine",'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('project')
})

app.listen(2000,()=>{
    console.log("The code is running now ")
})


// Authentication and Authorization
