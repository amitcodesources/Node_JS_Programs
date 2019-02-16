var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
var fetch = require("./fetch/fetch");
app.use("/fetch",fetch);
var insert = require("./insert/insert");
app.use("/insert",insert);
var update = require("./update/update");
app.use("/update",update);
var remove = require("./delete/delete");
app.use("/delete",remove);
app.listen(8080);
console.log("Server Listening The Port No 8080");


/*
http://localhost:8080/fetch
http://localhost:8080/insert
http://localhost:8080/update
http://localhost:8080/delete
*/