const mongoose = require("mongoose")


const commentSchema=new mongoose.Schema({
    body:{type:String,required:true},
    bookid:{},
    userid:{}
   
},{
    versionKey:false,
    timestamps:true,
})
const Comment =mongoose.model("comment",commentSchema)
module.exports=Comment