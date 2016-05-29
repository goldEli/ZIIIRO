var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/ZIIIRO';
var ObjectID=require('mongodb').ObjectID;

exports.addData=function(name,pwd,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("users").insert({name:name,pwd:pwd},func);
		}
	});
};
exports.findByName=function(name,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("users").find({name:name}).toArray(func);
		}
	});
};
exports.findByNamePwd=function(name,pwd,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("users").find({pwd:pwd,name:name}).toArray(func);
		}
	});
};
//--------------------------
exports.findALLData=function(func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("users").find().toArray(func);
		}
	})
};

exports.delData=function(id,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("users").remove({"_id":ObjectID(id)},func);
		}
	});
};