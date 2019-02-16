var express = require("express");
var my_fun = require("./sample");
var app = express();
app.use(my_fun({"uname":"admin", "upwd":"admin"}));
app.get("/", (req, res)=>{
    res.send("Login Success...!");
});
app.listen(8080);
console.log("Server Listening The Port No 8080");