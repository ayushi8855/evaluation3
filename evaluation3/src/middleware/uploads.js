const multer=require("multer")
const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file,  callback) {
        console.log({file})
        callback(null, path.join(__dirname,"../gallery"))
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now()
      callback(null, uniquePrefix + '-' + file.originalname)
    }
  })
  
  const fileFilter= (req, file, callback)=> {

    
    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){

        callback(null, true)

    }
    else{
      
      callback(null, false)

  }
  
  
   
  
  }

const option= multer({

storage:storage,

fileFilter:fileFilter,

limits:{
    filesize:1024*1024*5
},

})

const uploads=multer(option)
module.exports=uploads