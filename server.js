const mongoose=require('mongoose')
require('./connection')
const student_model=require("./model/student")
const bcrypt=require('bcryptjs')

const express=require('express');
const app=express()

const path=require('path')

app.use(express.static(path.join(__dirname,'all_page')))

app.use(express.urlencoded({ extended: true })); 

// serve home pages

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})



// insert data 

app.post('/sign',async(req,res)=>{

    const hashPassword=await bcrypt.hash(req.body.password,10)
    console.log(hashPassword)

    // create object of our model
    const student=new student_model()

    student.Name=req.body.name;
    student.Email=req.body.email;
    student.Phone_no=req.body.phone;
    student.Password=hashPassword;
    try {
        await student.save();
        res.sendFile(__dirname+"/all_page/login.html")
        
    }
    catch (error) {
        console.log(error)
        res.send("please fill the form carefully")
    }
})

// find data and match password

app.post('/login',async(req,res)=>{
    try{
        const user_email=req.body.email;
        const user_password=req.body.password;
    
        const all_data=await student_model.findOne({Email:user_email});    // here we get all data serching by email
        // console.log(all_data)
    
        const database_password=all_data.Password     // only get password from all data
        // console.log(database_password)
    
        const password_matching=await bcrypt.compare(user_password,database_password)
    
        if(password_matching==true){
            res.sendFile(__dirname+'/login_success.html')
        }
        else{
            res.send("Invalid login details")
        }
    }
    catch(error){
        console.log(error)
        res.send("Invalid")
    }



})

app.listen(8000,()=>{
    console.log("server start")
})
