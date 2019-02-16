//import http module
//http module is the predefined module
//http module is used to create http server
//no need to download http module
//http module is available along with the node engine
//http module is called native module
//require() is the predefined function in node JS
//require() used to import the modules
var http = require("http");
//create the http server
//createServer() is the predefined function used to create http server
var server = http.createServer((req, res)=>{
    //set the MIME Type
    //writeHead(_,_) is the predefined function in res object to the MIME Type
    res.writeHead(200, {'Content-Type':'text/html'});
    //send the response to client
    //write() is the predefined function used to send the response to the client
    res.write("<h1 style='color:red'>Welcome to First Http Server...</h1>");
    //lock the res object 
    //end() is the predefined function to lock the res object
    res.end();
});
//assign the port no to http server 
server.listen(8080);
console.log("Server listening the port no 8080");

// start the server in watch mode 
// open terminal type below to open live server
// >nodemon server 
// automatically we can start the server in watch mode
// launch the following url to check the response
// http://localhost:8080