//this file used to create & exports the mysql connection
//import mysql module
var mysql = require("mysql");

//import db_properties module
var prop = require("../config/db_properties");
//where "prop" is the json object
//by using prop we can access live json keys
//exports function
module.exports = {
    getConnection : () => {
        return mysql.createConnection ({
            host : prop.host,
            user : prop.user,
            password : prop.password,
            database : prop.database
        });
    }
};

//anyone can import JSON object
//getConnection is the JSON Key
//arrow function is the value
//arrow function return mysql connection object
