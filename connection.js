const mongoose=require("mongoose")
const url="mongodb://127.0.0.1:27017/mongodb_demo"

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err,data)=>{
    if(err){
        console.log(("connection failed"));
        console.log(err);
    }
    else{
        console.log("connection established");
        console.log(data)
    }
})