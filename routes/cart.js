/**
 * Created by Administrator on 2016/5/18.
 */
var express = require('express');
var router = express.Router();
var CartService=require('../services/CartService');
router.post('/add',function(req,res){
    var count=req.body.count;
    if(!count){
        count=1;
    }
    var uid=req.body.uid;
    var pid=req.body.pid;
    CartService.add([uid,pid,count],function(){
        res.send('suc');
    })
});
router.post('/addMinus',function(req,res){
    var count=req.body.count;
    var uid=req.body.uid;
    var pid=req.body.pid;
    CartService.addMinus([uid,pid,count],function(){
        res.send('suc');
    })
});
router.post('/showAll',function(req,res){
    var uid=req.body.uid;
    CartService.showAll(uid,function(data){
        res.send(data);
    })
});
router.post('/del',function(req,res){
    var id=req.body.id;
    CartService.del(id,function(){
        res.send('suc')
    })
});
module.exports=router;























