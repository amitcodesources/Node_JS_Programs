const path = require('path');

var filePathObj = 'H:\My New Programs\New Programs HYBD\Node_JS_Class_Samba_Sir\New MyModules\PathModuleEx/myText.txt';

var basenameWithExt = path.win32.basename(filePathObj);
console.log("BaseName With Extenesion: "+basenameWithExt);

var basenameWithoutExt = path.win32.basename(filePathObj, '.txt');
console.log("BaseName Without Extenesion: "+basenameWithoutExt);

// console.log(process.env.PATH.split(path.delimiter));

var dirName = path.dirname(filePathObj);
console.log("Directory Name: "+dirName);

var extName = path.extname(filePathObj);
console.log("Extension Name: "+extName);


var partFormat = path.format({dir: 'C:\\path\\dir',
							  base: 'file.txt'
							});
console.log(partFormat);


if(path.isAbsolute(filePathObj)){
	console.log('This is absolute path');
}else{
	console.log('This is not an absolute path');
}

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'));

console.log(path.parse(filePathObj));

var pathSplit =  filePathObj.split(path.sep);
console.log(pathSplit);

