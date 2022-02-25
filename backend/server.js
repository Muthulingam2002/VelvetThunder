const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app=express()

mongoose.connect("mongodb+srv://Muthulingam:Muthulingam1729@cluster0.uhp7b.mongodb.net/velvetThunder");

app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req ,res)=>{
 
})







//schema
const customerInfo={
  EventType:String,
  FullName:String,
  ContactNumber:Number,
  Email:String,
  Message:String,

}

//model

const info=mongoose.model("info",customerInfo);



app.post("../",(req,res)=>{
  let newInfo= new info({
    FullName:req.body.FullName,
    ContactNumber:req.body.ContactNumber,
    EventType:req.body.EventType,
    Email:req.body.Email
  });
  newInfo.save();
})















app.listen(3000,function(){
  console.log("server is running")
})
