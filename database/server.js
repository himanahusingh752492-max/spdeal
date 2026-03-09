import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./user.js";

import bodyParser from "body-parser"
import {auth} from "./middleware.js"
import cookieParser from "cookie-parser";

const app = express();



app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/register")
.then(()=>console.log("Database Connected"))
.catch(err=>console.log(err));
app.get("/register", (req, res) => {

  res.send("Register API working");
});
app.post("/register", async (req,res)=>{

try{
const {name,email,password}=req.body
 const user = await User.findOne({email:email})
 if(user){
return res.status(500).send({message:"email exists"});
 }
const newUser = new User(req.body);

await newUser.save();

res.send("User Saved");

}catch(err){

res.status(500).send(err);

}

});
app.get("/logout",(req,res)=>{

res.clearCookie("user");

res.send("Logout success");
console.log("Logout success");
});

app.post("/login", async (req, res) => {
 
  // console.log();
  console.log(req.cookies)
  const {email,password}=req.body
  const user = await User.findOne({email:email})
  
  //  res.json(user);
  console.log(user)
  
  console.log(req.body)
      if(!user){
  return res.send({message:"User not found"});
}

if(user.password !== password){
  return res.send({message:"Invalid password"});
}
    res.cookie("user",user.id,{
      httpOnly:false,
      maxAge:86400000
    })
 res.send({success:true,message:"login successfully"})

});


app.get("/home", async(req, res) => {

  res.send("Register API working");
});
app.get("/review", auth, (req, res) => {
 console.log("Register API working");
  res.send("Register API working");
});
app.get("/body", (req, res) => {

  res.send("Register API working");
});
app.get("/phones", auth, (req, res) => {

  res.send("Register API working");
});

app.get("/laptops", auth,(req, res) => {

  res.send("Register API working");
});
app.get("/tv", auth, (req, res) => {

  res.send("Register API working");
});
app.get("/ac", auth,(req, res) => {

  res.send("Register API working");
});
app.get("/electronics", auth,(req, res) => {

  res.send("Register API working");
});
app.get("/search", (req, res) => {

  res.send("Register API working");
});
app.get("/contact", auth,(req, res) => {

  res.send("Register API working");
});



app.listen(4000,()=>{
console.log("Server running on port 4000");
});