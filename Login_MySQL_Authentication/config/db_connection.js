//this file is used to create mysql connection object
//import express module
var express = require("express");
//import mysql module
var mysql = require("mysql");
//import db_properties
var prop = require("./db_properties");
//export the JSON Object
module.exports = {
    getConnection:()=>{
        return mysql.createConnection({
            host : prop.host,
            user : prop.user,
            password : prop.password,
            database : prop.database
        });
    }
};