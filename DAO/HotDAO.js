/**
 * Created by Administrator on 2016/5/16.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/ZIIIRO';
var ObjectID=require('mongodb').ObjectID;
var DBRef=require('mongodb').DBRef;

exports.findALLData=function(func){
    MongoClient.connect(url,function(err,db){
        if(err){
            console.info('·¢Éú´íÎó:'+err)
        }else{
            db.collection("hot").find().toArray(func);
        }
    })
};
