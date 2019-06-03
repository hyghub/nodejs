var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");

var handle={};
handle["/listCategory"]=requestHandlers.listCategory;
handle["/listProduct"]=requestHandlers.listProduct;
handle["/readFile"]=requestHandlers.readFile;
handle["/writeFile"]=requestHandlers.writeFile;
//{ route: [Function: route] } 对象
//console.log(router);
server.start(router.route,handle);