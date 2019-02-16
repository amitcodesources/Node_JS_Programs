//import express module 
//express module is used to develope the Rest API's(Web Services)
//require() is the predefined function used to import the modules
var express = require("express");

//create the Rest Object
var app = express();
//where "app" is the master object
//where "app" object used to create the Rest API's

//Create the Get Request
app.get("/login/:uname/:upwd", (req, res)=>{    
    var username = req.params.uname;
    var password = req.params.upwd;
    if(username == "admin" && password == "admin"){
        res.send("Login Success...!"); 
    }else{
        res.send("Login Fail...!"); 
    };
});

//assign the port no

app.listen(8080);
console.log("Serv er Listening The Port No 8080");



//To test the url
//http://localhost:8080/login/admin/admin