//import fs module
var fs = require("fs");
//write the data to sample.txt file asynchronusly
var data = "Welcome To FS Module Node JS in Syncronously New Data Added";
fs.appendFileSync(__dirname+"/../static/sample.txt", data, "utf8");    