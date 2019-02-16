var express = require("express");
var app = express();

//import login module
var login = require("./login/login");
//use login module
app.use("/login", login);

//import logout module
var logout = require("./logout/logout");
//use logout module
app.use("/logout", logout);

//assign the port no
app.listen(8080);
console.log("Server Listening the port no 8080");


//http://localhost:8080/login
//http://localhost:8080/login/login

//http://localhost:8080/logout
//http://localhost:8080/logout/logout