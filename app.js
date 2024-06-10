const express=require("express")   //importing done
const mongoose=require("mongoose")
const cors=require("cors")
const student=require("./models/student")   //file name-(student.js)

const app=express() //express=framework of nodejs
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.post("/contact",(req,res)=>{
    res.send("Welcome to my contact page")
})


app.post("/add",(req,res)=>{
    res.send("test")
})

app.listen(8080,()=>{
    console.log("Server started")
})

