// how to set the cookies 
// const express=require('express')
// const app=express()
// const cookie=require('cookie-parser')

// app.use(cookie())
// app.get('/',(req,res)=>{
//     res.cookie("name","Komal Shukla")
//     res.send("Hey bro i am working now")
//     console.log(req.cookies)
// })
// app.listen(3000,()=>{
//     console.log("Running")
// })


// bcrypt kaise use karte hai for password encrytption and decryption 

// JWT Learning 
const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
const cookie=require('cookie-parser')
const jwt=require('jsonwebtoken')

app.use(cookie())


app.get('/',(req,res)=>{
    // bcrypt.genSalt(10,function(err,salt){
    //     bcrypt.hash("komal",salt,function(err,hash){
    //         console.log(hash)
    //         // console.log(salt)
    //         // console.log(bcrypt.genSalt)
    //     })
    // })

    // bcrypt.compare('komal', '$2b$10$8KlHtryND/sTZ5NBiA3eBeeGG7z88/x.zuWT0zJ9rNIpPLyzyQ4ZG', function(err, result) {
    //     console.log(result)
    // });

    let token=jwt.sign({email:"money@example.com"},"secret");
    res.cookie("token",token);
    // console.log("Token :",token)
    // res.send("Hey bro i am working now")

})

app.get("/read",(req,res)=>{
    // console.log(req.cookies.token)

    // how to get data which come from the browser


    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data)
    res.send("I am Read Page")

})
app.listen(3000,()=>{
    console.log("Running")
})

