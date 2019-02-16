//import db_properties module
var prop = require("../config/db_properties");
//where "prop" is the json object
//by using prop we can access live json keys
//exports function
module.exports = function(){
    if(prop.user == "root" && prop.password == "root"){
        return "MySQL Connection Soon...!";
    } else {
        return "MongoDB Connection Soon...!";
    };
};