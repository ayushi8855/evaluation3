const require = require("mongoose")


const bookSchema=new mongoose.Schema({
    likes:{type:String,required:true},
    coverImage:{type:String},
    content:{type:String},
    userid:{}
    
},{
    versionKey:false,
    timestamps:true,
})
const Book =mongoose.model("book",bookSchema)
module.exports=Book
// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)