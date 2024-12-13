const express=require('express')
const bodyParser=require('body-parser')
const bcrypt=require('bcrypt')
const  app=express()
const User=require('./model/user')
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine",'ejs')

app.get('/signup',(req,res)=>{
    console.log("Signup file  is running now .!")
    res.render('signup')
})

app.post('/signup',async(req,res)=>{
    const {username,password}=req.body;
    // console.log(req.body.username)
    // console.log(req.body.password)
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new User({username,password:hashedPassword});
    // console.log(newUser)
    await newUser.save();
    res.send("User registered successfully !")
})


app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user=await User.findOne({username});
    if(!user){
        return res.send("User not Found !");
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.send("Invalid Password !")
    }
    res.send(`Login Successful ! Welcome  ${username}`)
})

app.listen(3000,()=>{
    console.log("Port is running correctly")
})