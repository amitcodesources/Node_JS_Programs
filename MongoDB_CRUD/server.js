var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
//take the permision to read the post parameters
app.use(bodyparser.urlencoded({extended:false}));
//import fetch module
var fetch = require("./fetch/fetch");
//use fetch module
app.use("/fetch", fetch);
//import insert module
var insert = require("./insert/insert");
//use insert module
app.use("/insert", insert);
//import update module
var update = require("./update/update");
//use update module
app.use("/update", update);
//import delete module
var remove = require("./delete/delete");
//use remove module
app.use("/delete", remove);
app.listen(8080);
console.log("Server Listening The Port No 8080");