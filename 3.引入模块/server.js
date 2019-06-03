var http=require('http');
var moudle=require('./moudle');
moudle.hi();
var server=http.createServer(moudle.service);
server.listen(8088);