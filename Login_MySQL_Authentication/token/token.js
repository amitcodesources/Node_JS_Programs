//this file used to generate the token
//import jwt-simple module
var jwt = require("jwt-simple");
//export function with arguments
//anyone can import exports function 
module.exports = function(obj, password){
    return jwt.encode(obj, password);
};
//function taking the two arguments
//@arg1 - obj
//@arg2 - password
//we will use same password for the encryption as well as decryption
//the encrypted format of obj called as Token