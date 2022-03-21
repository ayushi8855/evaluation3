const express=require("express")
const{body,validationResult}=require(`express-validator`);
const User =require("../models/usermodel")
const router=express.Router()

const upload = require("../middleware/uploads")
module.exports=router

router.post("",body("firstName").not().isEmpty().withMessage("firstname can not be empty").custom((value)=>{
    console.log(value.length)
    if(value.length<3||value.length>30){
        throw new Error("firstname should be between 3 to 30 words")
    }else{
        return true
    }
}),
body("email").not().isEmpty().withMessage("email can not be empty").isEmail().custom(async(value)=>{
    const user =await User.findOne({email:value})
    if(user){
        throw new Error("email is already registered")
    }
    return true
}), 
body("age").not().isEmpty().isNumeric().custom((value)=>{
    if(value<1||value>100){
        throw new Error("incorrect age ")
    }
    return true
 }), async(req,res)=>{

   
    try {
          
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
      

        const user=await User.create(req.body)
       return res.status(200).send(user)
    } catch (err) {
        res.status(404).send(err.message)
    }



})
router.post("",upload.single("profileImage"),async(req,res)=>{
        try {
           
            const user= await User.create({
               
                profilePic:req.file.path
            });
          return  res.status(201).send(user)
        } catch (error) {
            return res.status(500).send({error:error.message})
        }
    })

module.exports=router 
