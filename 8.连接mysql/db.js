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
//查询数据
function showAll(){
	console.log("进入查询方法");
	openConnection();
	var sql="select * from tbl_category order by id "
	connection.query(sql,function(err,results){
		if(err){
			console.log("[select error]-",err.message);
		}
		if(results){
			console.log("results:"+results);
			for(var i=0;i<results.length;i++){
				console.log("%d\t%s", results[i].id, results[i].name,results[i].sex);
			}
		}		
	});
	closeConnection();
}
//增加数据
function add(name){
	console.log("进入插入方法");
	openConnection();
	var params=[null,name,"男"];
	var sql="insert into tbl_category values (?,?,?) ";
	connection.query(sql,params,function(err,result){
		if(err){
			console.log("[insert error]-",err.message);
		}
		console.log("insert success, the generated id is:",result.insertId);
	});
	closeConnection();
}
exports.showAll = showAll;
exports.add = add;



















