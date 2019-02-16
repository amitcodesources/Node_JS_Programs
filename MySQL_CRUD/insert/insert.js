//this  file is uded to insert the records into products table
//import express modules
var express = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to the database
connection.connect();
//create the router instance
//Router instance used to craete the modules
var router = express.Router();
//create the Rest API's
router.post("/",(req,res)=>{
    //read p_id,p_name & p_cost coming from client
    //"body" is the key used to read the post parameters
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    //insert into products table
    connection.query("insert into products values("+p_id+",'"+p_name+"',"+p_cost+")",
                    (err,result)=>{
        if(err){
            res.send({"insert":"fail"});
        }else{
            res.send({"insert":"success"});
        }
    });
});
//exports the module
module.exports = router;