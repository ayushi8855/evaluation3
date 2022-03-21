const express=require("express")

const app=express();
const usercontroller=require("./controller/usercont")
const bookcontroller=require("./controller/book")
const commentcontroller=require("./controller/commentcont")
app.use(express.json())
app.use("/users",usercontroller)
app.use("/book",bookcontroller)
app.use("/comment",commentcontroller)


module.exports=app