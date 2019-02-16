//this file used to update the products table
//import the express module
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection oject
var connection = conn.getConnection();
//connect to the database
connection.connect();
//craete the router instance
//router instance used to create the modules
var router = express.Router();
//craete the Rest API's
router.post("/",(req,res)=>{
    //read p_id,p_name & p_cost coming from client
    //"body" is the key used to read the post parameters
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    //update the products table
    connection.query("update products set p_name= '"+p_name+"', p_cost= "+p_cost+" where p_id="+p_id,
                    (err,result)=>{
        if(err){
            res.send({"update":"fail"});
        }else{
            res.send({"update":"success"});
        }
    });
});
//exports the module
module.exports = router;