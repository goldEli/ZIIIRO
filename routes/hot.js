/**
 * Created by Administrator on 2016/5/16.
 */
var express = require('express');
var router = express.Router();
var HotService=require('../services/HotService');

router.post('/showAllProduct',function(req,res){
    HotService.showAllProduct(function(err,data){
        if(err){
            console.log('Ê§°Ü'+err);
        }else {
            if(data.length>0){
                res.send(data);
            }else{
                res.send(data);
            }
        }
    })
});

module.exports=router;
