//import fs module
var fs = require("fs");
//read the data from sample.txt file asynchronusly
fs.readFile(__dirname+"/../static/sample.txt", (err, result)=>{
    if(err){
        console.log("Error...!");
    } else {
        console.log(result.toString());
    }
});