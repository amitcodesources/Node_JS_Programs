const path = require('path');

var pathObj = path.parse(__filename);

// var rootObj = pathObj.root;

console.log(pathObj);
console.log();
console.log("Root of pathObject is: "+pathObj.root);
console.log();
console.log("Directory of pathObject is: "+pathObj.dir);
console.log();
console.log("Base of pathObject is: "+pathObj.base);
console.log();
console.log("Extension of pathObject is: "+pathObj.ext);
console.log();
console.log("Name of pathObject is: "+pathObj.name);

