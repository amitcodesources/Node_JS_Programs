//import express module
//express module used to develop the Rest API'S
var express = require("express");
//create the Router Instance
//Router Instance used to create the Modules
var router = express.Router();
//where "router" object used to make the Modules

//create the Get Request
router.get("/",(req,res)=>{
    res.send("Welcome To Logout Module....!");
});
//create the Get Request
router.get("/logout",(req,res)=>{
    res.send("We Will Close Token Based Authentication");
});
//export router
module.exports = router;