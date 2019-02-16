//import the express module
var express = require("express");
//import body-parser
var bodyparser = require("body-parser");
//create the Rest Object
var app = express();
//set the JSON as MIME Type
app.use(bodyparser.json());
//take the permision to read the post parameters
app.use(bodyparser.urlencoded({extended:false}));
//locate the Angular JS Application Path
app.use(express.static(__dirname+"/../Login"));
//import login module
var login = require("./login/login");
//use the login module
app.use("/login", login);
//assign the port no
app.listen(8080);
console.log("Server Listening The Port No 8080");