var express = require('express');
var router = express.Router();
var ProductServices=require('../services/ProductService');

router.post('/showAllProduct',function(req,res){
	ProductServices.showAllProduct(function(err,data){
		if(err){
			console.log('失败'+err);
		}else {
			if(data.length>0){
				res.send(data);
			}
		}
	})
});

router.post('/search',function(req,res){
	var name=req.body.name;
	var price=req.body.price;
	var category=req.body.category;
	ProductServices.search(name,price,category,function(err,data){
		if(err){
			console.log('失败'+err);
		}else {
			if(data.length>0){
				res.send(data);
			}else{
				res.send(data);
			}
		}
	})
});

router.post('/details',function(req,res){
	var id=req.body.id;
	ProductServices.details(id,function(err,data){
		if(err){
			console.log('失败'+err);
		}else {
			if(data.length>0){
				res.send(data);
			}else{
				console.log('失败');
			}
		}
	})
});

module.exports=router;