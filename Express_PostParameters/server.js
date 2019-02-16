//import express moudle
//express module used to develop the Rest API'S
var express = require("express");
//import body-parser
//body-parser module used to read the Post Parameters
var bodyparser = require("body-parser");
//create the Rest Object
var app = express();
//set the JSON AS MIME Type
app.use(bodyparser.json());
//take the permission to listen post parameters
app.use(bodyparser.urlencoded({extended:false}));
//create the Rest API
app.post("/login",(req,res)=>{
    //read uname & upwd
    //body is the key used to read post parameters
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    //compare 
    if(uname == "admin" && upwd == "admin"){
        res.send({"login":"success"});
    }else{
        res.send({"login":"fail"});
    }
});
app.listen(8080);
console.log("Server Listening the port no.8080");



//To test the url
//http://localhost:8080/login?uname=admin&upwd=admin