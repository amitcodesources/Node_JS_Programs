//import fs module
var fs = require("fs");
//write the data to sample.txt file asynchronusly
var data = "Welcome To FS Module Node JS in Asyncronously New Data Added";
fs.open(__dirname+"/../static/sample.txt", "r+", (err, fd)=>{
    if(err){
        console.log("Error while Opening the File...!");
    } else {
        console.log("File Opened Successfully");
    }
});
