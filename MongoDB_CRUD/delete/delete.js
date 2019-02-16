var express = require("express");
var mongodb = require("mongodb");
var nareshIT = mongodb.MongoClient();
var router = express();
router.post("/", (req, res)=>{
    var p_id = req.body.p_id;
    var obj = {"p_id":p_id};
    nareshIT.connect("mongodb://localhost:27017/nodedb", (err, db)=>{
            db.collection("products")
            .deleteOne(obj, (err, result)=>{
                if(err){
                    res.send({"delete":"Fail"});
                } else {
                    res.send({"delete":"success"});
                }
            })
    });
});
module.exports = router;