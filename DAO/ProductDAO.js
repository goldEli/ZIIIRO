var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/shoppingCar';
//查找所有数据
exports.findALLData=function(func){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.info('发生错误:'+err)
		}else{
			db.collection("productInfo").find().toArray(func);
		}
	})
}