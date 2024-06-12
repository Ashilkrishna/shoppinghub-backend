const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const course=require("./models/shop")
const {productmodel}=require("./models/shop")


const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://Ashil:Ashil7132@cluster0.js8ogyx.mongodb.net/shopDB?retryWrites=true&w=majority&appName=Cluster0")
app.post("/search",(req,res)=>{
    let input = req.body
    productmodel.find(input).then(
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