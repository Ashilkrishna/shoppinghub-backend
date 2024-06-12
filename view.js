const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const product=require("./models/shop")
const {productmodel}=require("./models/shop")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://Ashil:Ashil7132@cluster0.js8ogyx.mongodb.net/shopDB?retryWrites=true&w=majority&appName=Cluster0")
app.get("/view",(req,res)=>{
    productmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
app.listen(8080,()=>{
    console.log("server started")
})