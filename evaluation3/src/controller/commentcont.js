
const express=require("express")
const comment =require("../models/commentmodel")
const router=express.Router()
app.post("",async(req,res)=>{
    try {
        const comment= await comment.create(req.body);
      return  res.status(201).send(comment)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports=router