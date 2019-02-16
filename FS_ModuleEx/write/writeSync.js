//import fs module
var fs = require("fs");
//write the data to sample.txt file asynchronusly
var data = "Welcome To FS Module Node JS Synchronously";
fs.writeFileSync(__dirname+"/../static/sample.txt", data)