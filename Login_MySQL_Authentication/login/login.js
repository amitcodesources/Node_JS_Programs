//import express module
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connetion object
var connetion = conn.getConnection();
//connect to database
connetion.connect();
//import token.js
var my_fun = require("../token/token");
//where "my_fun" is the exported function
//"my_fun" takes the arguments
//arg1 - object
//arg2 - password
//we will use same password for decryption purpose in function'//create the router instance
var router = express.Router();
//create the Rest API's
router.post("/", (req, res)=>{
    //read uname & upwd
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    //compare with the database
    connetion.query("select * from login_details where uname = '"+uname+"' and upwd='"+upwd+"'", (err, recordsArray, fields)=>{
        if(recordsArray.length > 0){
            var token = my_fun({'uname':uname, 'upwd':upwd}, 'hr@tcs.com');
            res.send({'login':'success', 'token':token});
        } else {
            res.send({'login':'Fail'});
        }
    });
});
//exports the module
module.exports = router;