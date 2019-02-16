//import "fs" module
var fs = require("fs");
//open the file
fs.open(__dirname+"/static/sample.txt","r+",(err,fd)=>{
    //where "fd" is the file descriptive object
    //we will use same "fd" for closing the file
    if(err){
        console.log("Error while Opening the File...!");
    }else{
        console.log("File Opened Successfully...!");
        //write operation
        fs.writeFile(__dirname+"/static/sample.txt","Welcome...!",
                                                        (err)=>{
            if(err){
                console.log("Error while writing the data...!");
            }else{
                console.log("Data Write Successfully...!");
                //append the data
                fs.appendFile(__dirname+"/static/sample.txt",
                              "Welcome...!",
                              "utf8",
                              (err)=>{
                    if(err){
                        console.log("Error while Appending the Data...!");
                    }else{
                        console.log("Data Appended Successfully...!");
                        //read the data from file
                        fs.readFile(__dirname+"/static/sample.txt",
                                        (err,result)=>{
                            if(err){
                                console.log("Error while Reading the File...!");
                            }else{
                                console.log(result.toString());
                                //close the file
                                fs.close(fd,(err)=>{
                                    if(err){
                                        console.log("Error while closing the File");
                                    }else{
                                        console.log("File Closed Successfully...!");
                                        //delete the file
                                        fs.unlink(__dirname+"/static/sample.txt",
                                                    (err)=>{
                                            if(err){
                                                console.log("Error while Deleting the File...!");
                                            }else{
                                                console.log("File Deleted Successfully....!");
                                            }
                                        });//deleting
                                    }
                                });//closing
                            }
                        });//reading        
                    }
                });//appending
            }
        });//writing
    }; 
});//opening