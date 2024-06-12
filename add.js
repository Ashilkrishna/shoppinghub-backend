const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const product=require("./models/shop")
const {productmodel}=require("./models/shop")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://Ashil:Ashil7132@cluster0.js8ogyx.mongodb.net/shopDB?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input=req.body
    let product=new productmodel(input)
    console.log(product)
    product.save()
    res.send("product added")
})
app.listen(8080,()=>{
    console.log("server started")
})