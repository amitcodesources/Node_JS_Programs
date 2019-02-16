//import express module 
//express module is used to develope the Rest API's(Web Services)
//require() is the predefined function used to import the modules
var express = require("express");

//create the Rest Object
var app = express();
//where "app" is the master object
//where "app" object used to create the Rest API's

//Create the Get Request
app.get("/login", (req, res)=>{
    //read uname
    var uname = req.query.uname;
    //read upwd
    var upwd = req.query.upwd;
    //compare uname & upwd
    if(uname == "admin" && upwd == "admin"){
        res.send({"login": "Success"}); 
    }else{
        res.send({"login": "Fail"});    
    };
});

//assign the port no

app.listen(8080);
console.log("Serv er Listening The Port No 8080");



//To test the url
//http://localhost:8080/login?uname=admin&upwd=admin