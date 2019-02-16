module.exports = function(obj){
    return function(req, res, next){
        if(obj.uname == "admin" && obj.upwd == "admin"){
            next();
        } else {
            res.send("Unauthourised User...!");
        }
    };
};