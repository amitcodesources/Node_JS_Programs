//import express module 
//express module is used to develope the Rest API's(Web Services)
//require() is the predefined function used to import the modules
var express = require("express");

//create the Rest Object
var app = express();
//where "app" is the master object
//where "app" object used to create the Rest API's

//Create the Get Request
app.get("/products", (req, res)=>{
    res.send("We will fetch data from MySQL Soon");
});

//Create the Post Request
app.get("/insert", (req, res)=>{
    res.send("We will insert objects into MongoDB Soon");
});

//assign the port no

app.listen(8080);
console.log("Serv er Listening The Port No 8080");



//To test the url
//http://localhost:8080/products
//http://localhost:8080/insert