//middleware in nodejs used for authentication
//next() function called as middleware
//middleware will execute bofore routing/Rest API
var express = require("express");
var app = express();
var middleware = function(req, res, next){
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if(uname=="admin" && upwd=="admin"){
        next();
    } else{
        console.log("Authentication Failed...!");
        res.send("Authentication Failed...!");
    }
};
app.use(middleware);
app.get("/", (req, res)=>{
    res.send("Login Success...!");
});
app.listen(8080);
console.log("Server Listening The Port No 8080");