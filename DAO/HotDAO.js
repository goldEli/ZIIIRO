/**
 * Created by Administrator on 2016/5/16.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:127.0.0.1/ZIIIRO';
var ObjectID=require('mongodb').ObjectID;
var db = require("./database");
exports.findALLData=function(func){
    db.collection("hot").find({},function(data){
        db.findJoin(data,"product",func);
    });
};
