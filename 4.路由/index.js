var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");

var handle={};
handle["/listCategory"]=requestHandlers.listCategory;
handle["/listProduct"]=requestHandlers.listProduct;
//{ route: [Function: route] } 对象
console.log(router);
server.start(router.route,handle);