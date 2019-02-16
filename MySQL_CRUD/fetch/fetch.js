//this file used to fetch data from products table
//import express module
var express  = require("express");
//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//where connection is mysql connection object
//connect to database
connection.connect();
//create the router instance 
var router  = express.Router();

//create Rest API
router.get("/", (req, res)=>{
    //query the table
    connection.query("Select * from products", (err, recordArray, field) =>{
        if(err){
            res.send("Error...!");
        } else {
            res.send(recordArray);
        }
    });
});

//export the router
module.exports = router;