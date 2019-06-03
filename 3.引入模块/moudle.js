function service(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello response node.js');
}
function sayHello(){
	console.log("hello console moudle.js");
}
exports.hi=sayHello;
exports.service=service;