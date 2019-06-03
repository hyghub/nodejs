var mysql=require("mysql");
var connection;
function openConnection(){
	connection =mysql.createConnection({
		host:"127.0.0.1",
		user:"root",
		password:"root",
		database:"how2java"
	});
	connection.connect();
}
function closeConnection(){
	connection.end();
}
function showAll(){
	console.log("进入方法");
	openConnection();
	var sql="select * from tbl_category order by id "
	connection.query(sql,function(err,results){
		if(err){
			console.log("[select error]-",err.message);
		}
		if(results){
			for(var i=0;i<results.length;i++){
				console.log("%d\t%s",results[i].id,results.[i].name);
			}
		}		
	});
	closeConnection();
}
exports.showAll = showAll;



















