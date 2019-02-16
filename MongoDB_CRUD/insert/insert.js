var express = require("express");
var mongodb = require("mongodb");
var nareshIT = mongodb.MongoClient;
var router = express.Router();
router.post("/",(req,res)=>{
    //read the p_id,p_name & p_cost
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    //create the JSON Object
    var obj = {"p_id":p_id,
               "p_name":p_name,
               "p_cost":p_cost};
    //insert into mongodb.
    nareshIT.connect("mongodb://localhost:27017/nodedb",
                    (err,db)=>{
        db.collection("products")
          .insertOne(obj,(err,result)=>{
            if(err){
                res.send({"insert":"fail"});
            }else{
                res.send({"insert":"success"});
            }
        });
    });
});
module.exports = router;
//exports the module
module.exports = router;