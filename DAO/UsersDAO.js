var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/shoppingCar';
var ObjectID=require('mongodb').ObjectID;

exports.findALLData=function(func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("orderInfo").find().toArray(func);
		}
	})
};
exports.addData=function(name,price,imgPath,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("orderInfo").insert({name:name,price:price,imgPath:imgPath},func);
		}
	}); 
};
exports.findByName=function(name,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("orderInfo").find({name:name}).toArray(func);
		}
	});
};
exports.delData=function(id,func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("orderInfo").remove({"_id":ObjectID(id)},func);
		}
	});
};