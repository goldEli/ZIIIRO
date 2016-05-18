/**
 * Created by Administrator on 2016/5/18.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/ZIIIRO';
var ObjectID=require('mongodb').ObjectID;
var db = require("./database");
exports.add=function(arr,func){
    db.collection("cart").insert({
        user:{$ref:"users",$id:db.ObjectID(arr[0])},
        product:{$ref:"products",$id:db.ObjectID(arr[1])},
        count:arr[2]
    },func);
};
exports.findById=function(arr,func){
    db.collection('cart').find({
        'user.$id':db.ObjectID(arr[0]),
        'product.$id':db.ObjectID(arr[1])
    },function(data){
        db.findJoin(data,'product',func);
    })
};
exports.update=function(arr,func){
    db.collection('cart').update({_id:db.ObjectID(arr[0])},{$set:{count:arr[1]}},func);
};
exports.findAll=function(uid,func){
  db.collection('cart').find({'user.$id':db.ObjectID(uid)},function(data){
     db.findJoin(data,'product',func);
  });
};




















