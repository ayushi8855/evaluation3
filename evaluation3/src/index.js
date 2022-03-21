const express=require("express")

const app=express();
const usercontroller=require("./controller/usercont")
app.use(express.json())
app.use("/users",usercontroller)


module.exports=app