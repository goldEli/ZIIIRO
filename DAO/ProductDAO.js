var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/ZIIIRO';
var ObjectID=require('mongodb').ObjectID;
var DBRef=require('mongodb').DBRef;

exports.findALLData=function(func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("products").find().toArray(func);
		}
	})
};
exports.findByInput=function(name,price,category,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("products").find({$or:[{name:name},{price:price},{category:category}]}).toArray(func);
		}
	})
};
exports.findById=function(id,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("products").find({"_id":ObjectID(id)}).toArray(func);
		}
	})
};