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
module.exports=router;