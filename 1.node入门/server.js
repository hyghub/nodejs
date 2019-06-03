var http=require('http');
function service(request,response){
	response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
	response.end('Hello 入门 node.js');
}
var server=http.createServer(service);
server.listen(8088);