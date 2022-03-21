const app =require("./index")
const connect= require("./configs/db")

app.listen(7000,async()=>{
    try {
        await connect()
        console.log("listining to 5000")
    } catch (error) {
        res.send(error.message)
    }
})