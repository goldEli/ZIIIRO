var express = require('express');
var router = express.Router();
var UsersService=require('../services/UsersService');

router.post('/showAllProduct',function(req,res){
	UsersService.showAllProduct(function(err,data){
		if(err){
			console.log('失败'+err);
		}else {
			if(data.length>0){
				res.send(data);
			}
		}
	})
});
router.post('/add',function(req,res){
	var name=req.body.name;
	var price=req.body.price;
	var imgPath=req.body.imgPath;
	UsersService.add(name,price,imgPath,function(err,result){
		if(!err){
			res.send('success');
		}
	})
});
router.post('/checkShoppingCar',function(req,res){
	var name=req.body.name;
	UsersService.checkShoppingCar(name,function(err,data){
		if(err){
			console.log('失败'+err);
		}else {
			if(data.length>0){
				res.send('该商品已添加购物车');
			}else{
				res.send('err');
			}
		}
	})
});
router.post('/delOrder',function(req,res){
	var id=req.body.id;
	UsersService.delOrder(id,function(err,result){
		if(!err){
			res.send('success');
		}
	})
});

module.exports=router;
