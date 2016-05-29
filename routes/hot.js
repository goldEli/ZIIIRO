/**
 * Created by Administrator on 2016/5/16.
 */
var express = require('express');
var router = express.Router();
var HotService=require('../services/HotService');

router.post('/showAllProduct',function(req,res){
    HotService.showAllProduct(function(data){
        res.send(data);
    });
});

module.exports=router;
