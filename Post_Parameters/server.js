//import http module
var http = require("http");
//import querystring module
//querystring module is the predefined module
//querystring module used to read the post parameters
//no need to download querystring module
//querystring module available along with node engine
var qs = require("querystring");
//create the http server
var server = http.createServer((req,res)=>{
    /*req is the predefined object used to read 
      the client data
     res is the predefined object used to 
      send the response to the client
     both "req" & "res" objects provided by node engine.
    */
    //set the HTML As MIME Type
    res.writeHead(200,{'Content-Type':'text/html'});
    //take variable to store results
    var data = "";
    //listen post parameters
    /* on() is the predefined function used to 
    listen the post parameters*/
    //"data" is the predefined key
    //"data" key used to listen the data.
    //result will be stored into callback
    //where "res" is the variable that holds the result 
    req.on("data",function(res){
        data = data+res;
    });
    //informing to node server about listening process
    //"end" is the key used to complete the listening
    req.on("end",function(){
        //parse the result
                var obj = qs.parse(data);
                //var obj = JSON.stringify(data);
        //query the post parameters
        var uname = obj.uname;
        var upwd = obj.upwd;
        //compare the results
        if(uname == "admin" && upwd == "admin"){
            res.write("<h1 style='color:green'>Login Success...!</h1>");
        }else{
            res.write("<h1 style='color:red'>Login Fail...!</h1>");
        };
        //lock the result object
        res.end();
    });
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

