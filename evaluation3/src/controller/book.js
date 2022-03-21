const express=require("express")
const Book =require("../models/bookmodel")
const router=express.Router()
router.post("",async(req,res)=>{
    try {
        const book= await book.create(req.body);
      return  res.status(201).send(book)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
module.exports=router 