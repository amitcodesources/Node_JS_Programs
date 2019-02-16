//middleware in nodejs used for authentication
//next() function called as middleware
//middleware will execute bofore routing/Rest API
var express = require("express");
var app = express();
var middleware = function(req, res, next){
    req.setTime = new Date().toLocaleTimeString();
    next();
};
app.use(middleware);
app.get("/", (req, res)=>{
    res.send(req.setTime);
});
app.listen(8080);
console.log("Server Listening The Port No 8080");