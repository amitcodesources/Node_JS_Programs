//import http module
var http = require("http");
//import url module
//url is the predefined module in Node.
//url module used to read the forms get parameters.
//no need to download url module
//url module available along with Node engine
var url = require("url");
//create the http server
var server = http.createServer((req,res)=>{
    //set the MIME Type
    res.writeHead(200,{'Content-Type':'text/html'});
    //"url" is the key in req object, used to read the URL'S
    //parse() is the predefined function url module
    //parse function used to parse the URL'S
    var obj = url.parse(req.url,true).query;
    //read uname
    var uname = obj.uname;
    //read upwd
    var upwd = obj.upwd;
    //compare uname & upwd
    if(uname == "admin" && upwd == "admin"){
        res.write("<h1 style='color:green'>Login Success...!</h1>");
    }else{
        res.write("<h1 style='color:red'>Login Fail...!</h1>");
    }
    //lock the res object
    res.end();
});
//assign the port no.
server.listen(8080);
console.log("Server Listening the port no.8080");

// start the server in watch mode 
// open terminal type below to open live server
// >nodemon server 
// automatically we can start the server in watch mode
// launch the following url to check the response
// http://localhost:8080

//To test url
//http://localhost:8080/?uname=admin&upwd=admin

