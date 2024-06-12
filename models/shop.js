const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "title":{type:String,required:true},
        "price":{type:String,required:true},
        "desc":{type:String,required:true},
        "image":{type:String,required:true},
        

        
    
    }
)
let productmodel=mongoose.model("product",schema)
module.exports={productmodel}