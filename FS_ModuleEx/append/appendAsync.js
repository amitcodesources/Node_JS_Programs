//import fs module
var fs = require("fs");
//write the data to sample.txt file asynchronusly
var data = "Welcome To FS Module Node JS in Asyncronously New Data Added";
fs.appendFile(__dirname+"/../static/sample.txt", data, "utf8", (err, result)=>{
    if(err){
        console.log("Error...!");
    } else {
        console.log("Data Append Successfully");
    }
});