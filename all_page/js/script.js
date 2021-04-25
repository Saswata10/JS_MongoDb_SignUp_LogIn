
const form=document.getElementById("form")
const uname=document.getElementById('uname')
const uemail=document.getElementById('uemail')
const uphone=document.getElementById('uphone')
const upassword=document.getElementById('upassword')
const conpassword=document.getElementById('conpassword')

function validation(e){
    // name validation 

    var uname_value=uname.value.trim()

    uname.classList.remove("successfull")


    if(uname_value==""){
        e.preventDefault();
        document.getElementById("nameSpan").innerHTML="** can't keep blank this field";
        uname.classList.add("error")
    }

    else if(uname_value.length<3){
        e.preventDefault();
        document.getElementById("nameSpan").innerHTML="** username is too short";
        uname.classList.add("error")
    }
    else{
        uname.classList.add("successfull")
        document.getElementById("nameSpan").innerHTML="";
    }

    // phone no validation

    var uphone_value=uphone.value.trim()

    uphone.classList.remove("successfull")

    if(uphone_value==""){
        e.preventDefault();
        document.getElementById("phoneSpan").innerHTML="** can't keep blank this field";
        uphone.classList.add("error")
    }

    else if(uphone_value.length!=10){
        e.preventDefault();
        document.getElementById("phoneSpan").innerHTML="** invalid Phone number";
        uphone.classList.add("error")   
    }
    else if(uphone_value==NaN){
        e.preventDefault();
        document.getElementById("phoneSpan").innerHTML="** invalid Phone number";
        uphone.classList.add("error") 
    }
    else{
        document.getElementById("phoneSpan").innerHTML=""
        uphone.classList.add("successfull") 
    }

    // Password validation

    var upassword_value=upassword.value.trim()

    upassword.classList.remove("successfull")

    if(upassword_value==""){
        e.preventDefault()
        document.getElementById("passwordSpan").innerHTML="** can't keep blank this field"
        upassword.classList.add("error")
    }
    else if(upassword_value.length<8){
        e.preventDefault()
        document.getElementById("passwordSpan").innerHTML="** please maintain mention password rule"
        upassword.classList.add("error")
    }
    else if(upassword_value.search(/[0-9]/)==-1){
        e.preventDefault()
        document.getElementById("passwordSpan").innerHTML="** please maintain mention password rule"
        upassword.classList.add("error")
    }
    else if(upassword_value.search(/[a-z]/)==-1){
        e.preventDefault()
        document.getElementById("passwordSpan").innerHTML="** please maintain mention password rule"
        upassword.classList.add("error")
    }
    else if(upassword_value.search(/[A-Z]/)==-1){
        e.preventDefault()
        document.getElementById("passwordSpan").innerHTML="** please maintain mention password rule"
        upassword.classList.add("error")
    }
    else if(upassword_value.search(/[!\@\#\$\%\^\&\*\(\)\>\<\.\,\:\+\-\}\{]/)==-1){
        e.preventDefault()
        document.getElementById("passwordSpan").innerHTML="** please maintain mention password rule"
        upassword.classList.add("error")
    }
    else{
        document.getElementById("passwordSpan").innerHTML=""
        upassword.classList.add("successfull") 
    }

    // confirm Password validation

    var confirm_value=conpassword.value.trim()
    var upassword_value=upassword.value.trim()

    conpassword.classList.remove("successfull")

    if(confirm_value==''){
        e.preventDefault()
        document.getElementById("conpasswordSpan").innerHTML="** can't keep blank this field"
        conpassword.classList.add("error")
    }
    else if(upassword_value!=confirm_value){
        e.preventDefault()
        document.getElementById("conpasswordSpan").innerHTML="** password not matched"
        conpassword.classList.add("error")
    }
    else{
        document.getElementById("conpasswordSpan").innerHTML=""
        conpassword.classList.add("successfull") 
    }

    // Email validation

    var email_value=uemail.value.trim()

    uemail.classList.remove("successfull")

    if(email_value==""){
        e.preventDefault()
        document.getElementById("emailSpan").innerHTML="** can't keep blank this field"
        uemail.classList.add("error")
    }
    else{
        document.getElementById("emailSpan").innerHTML=""
        uemail.classList.add("successfull") 
    }

}

form.addEventListener('submit',validation)