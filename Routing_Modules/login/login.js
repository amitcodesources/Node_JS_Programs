//import express module
//express module used to develop the Rest API'S
var express = require("express");
//create the Router Instance
//Router Instance used to create the Modules
var router = express.Router();
//where "router" object used to make the Modules

//create the Get Request
router.get("/",(req,res)=>{
    res.send("Welcome To Login Module....!");
});
//create the Get Request
router.get("/login",(req,res)=>{
    res.send("We Will Authenticate With MySQL Soon...!");
});
//export router
module.exports = router;