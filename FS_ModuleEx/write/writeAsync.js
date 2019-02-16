//import fs module
var fs = require("fs");
//write the data to sample.txt file asynchronusly
var data = "Welcome To FS Module Node JS in Asyncronously";
fs.writeFile(__dirname+"/../static/sample.txt", data, (err, result)=>{
    if(err){
        console.log("Error...!");
    } else {
        console.log("Data Write Successfully");
    }
});