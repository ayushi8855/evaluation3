const mongoose = require("mongoose")


const publicationSchema=new mongoose.Schema({
   Name:{type:String,required:true},
   userid:{}
    
},{
    versionKey:false,
    timestamps:true,
})
const Publication =mongoose.model("publication",publicationSchema)
module.exports=publication