const mongoose=require('mongoose');
const cors=require('cors');
const express=require('express')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser')
require('./db/connection');
const User=require('./db/UserModule');

const app=express();
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}));
app.use(cookieParser());

app.post('/register',async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const passwordHash=await bcrypt.hash(password,10);
        const newUser=new User({
            name,email,password:passwordHash
        })
        const result=await newUser.save();
        console.log(result)
        res.json({status:"Okay"})
    } catch (error) {
        res.json({status:"Fail"})
    }
  

})

app.post('/login',async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await User.findOne({email:email})
        if(user){
            const isMatch= await bcrypt.compare(password,user.password );
            if(isMatch){
          const token=jwt.sign({email:user.email},'jwt-secret-key',{expiresIn:'1d'})
          console.log(token);
          res.cookie("token",token)
        
        return res.json({status:"success"})
        }
            else{
                 return res.json({status:'Password or email is incorrect'})
            }
        }
        else{
            return res.json({status:'User not found'})
        }
    } catch (error) {
        return (res.json({status:"Something went wrong Please check"}))
    }
})
app.listen(3000,()=>{
    console.log('server is running on 3000');

})