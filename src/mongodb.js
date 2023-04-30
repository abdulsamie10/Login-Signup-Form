const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/loginSchema")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("Failed to connect!")
})

const logInScehma=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",logInScehma)

module.exports=collection