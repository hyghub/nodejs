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
			return;
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
			return;
		}
		console.log("insert success, the generated id is:",result.insertId);
	});
	closeConnection();
}
//删除数据
function remove(id){
	console.log("进入删除方法");
	openConnection();
	var params=[id];
	var sql=" delete from tbl_category where id =? ";
	connection.query(sql,params,function(err,result){
		if(err){
			console.log("[remove error]-",err.message);
			return;
		}
		console.log("remove id=%id success",id);
	});
	closeConnection();
}
//获取数据
function get(id){
	console.log("进入获取方法");
	openConnection();
	var params=[id];
	var sql=" select * from tbl_category where id = ? ";
	connection.query(sql,params,function(err,result){
		if(err){
			console.log("[remove error]-",err.message);
			return;
		}
		if(result.length !=0){
            var category = {id:result[0].id,name:result[0].name,sex:result[0].sex};
            console.log("get category:"+ JSON.stringify(result))
        }else{
            console.log("not found with id :" + id)
        }
	});
	closeConnection();
}
//更新数据
function update(name,id){
	console.log("进入更新方法");
	openConnection();
	var params=[name,id];
	var sql=" update tbl_category set name = ? where id = ? ";
	connection.query(sql,params,function(err,result){
		if(err){
			console.log("[update error]-",err.message);
			return;
		}
		 console.log("update success"+result.affectedRows);
	});
	closeConnection();
}
exports.showAll = showAll;
exports.add = add;
exports.remove=remove;
exports.get=get;
exports.update=update;



















