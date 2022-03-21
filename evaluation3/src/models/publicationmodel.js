const require = require("mongoose")


const publicationSchema=new mongoose.Schema({
   Name:{type:String,required:true},
   userid:{}
    
},{
    versionKey:false,
    timestamps:true,
})
const publication =mongoose.model("publication",publicationSchema)
module.exports=publication