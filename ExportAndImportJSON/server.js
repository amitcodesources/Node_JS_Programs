var express = require("express");
var conn = require("./connection/db_connection");
//where conn is the function
var app = express();
app.get("/", (req, res)=>{
    res.send(conn());
});
app.listen(8080);
console.log("Server Listening The Port No 8080");

//http://localhost:8080/