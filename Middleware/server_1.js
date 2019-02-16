//middleware in nodejs used for authentication
//next() function called as middleware
//middleware will execute bofore routing/Rest API
var express = require("express");
var app = express();
var middleware = function(req, res, next){
    console.log("Middleware will execute before Rest API...!");
    next();
};
app.use(middleware);
app.get("/", (req, res)=>{
    console.log("I will execute after Middleware...!");
});
app.listen(8080);
console.log("Server Listening The Port No 8080");