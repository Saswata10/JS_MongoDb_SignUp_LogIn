const mongoose=require('mongoose')

const schema=mongoose.Schema(
{
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Phone_no:{
        type:Number,
        require:true
    },
    Password:{
        type:String,
        require:true
    }
}
)

module.exports=mongoose.model("student_login",schema)
