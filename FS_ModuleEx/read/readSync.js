//import fs module
var fs = require("fs");
//read the data from sample.txt file synchronusly
var result = fs.readFileSync(__dirname+"/../static/sample.txt");
console.log(result.toString());