//import mongodb module
//mongodb module used to interact with the mongo database
var mongodb = require("mongodb");
//import express module
var express = require("express");
//mongodb follows the client server architecture
//so to connect to server we must create the client
//create the client
var nareshIT = mongodb.MongoClient;
//where "nareshIT" is the mongo client
//create the router instance
var router = express.Router();
//create the Rest API's
router.get("/", (req, res)=>{
    nareshIT.connect("mongodb://localhost:27017/nodedb", (err, db)=>{
        db.collection("products").find().toArray((err, array)=>{
            res.send(array);
        });
    });
});
//exports the router
module.exports = router;