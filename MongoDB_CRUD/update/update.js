var express = require("express");
var mongodb = require("mongodb");
var nareshIT = mongodb.MongoClient;
var router = express.Router();
router.post("/",(req,res)=>{
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    var o_obj = {'p_id':p_id};
    var n_obj = {$set:{'p_name':p_name,'p_cost':p_cost}};
    nareshIT.connect("mongodb://localhost:27017/nodedb",
                    (err,db)=>{
        db.collection("products")
          .updateOne(o_obj,n_obj,(err,result)=>{
            if(err){
                res.send({"update":"fail"});
            }else{
                res.send({"update":"success"});
            }
        });
    });
});
module.exports = router;