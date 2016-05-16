var express = require('express');
var router = express.Router();
var UsersService=require('../services/UsersService');

router.post('/addUser',function(req,res){
	var name=req.body.name;
	var pwd=req.body.pwd;
	UsersService.addUser(name,pwd,function(err,result){
		if(!err){
			res.send('success');
		}
	})
});
router.post('/checkUserName',function(req,res){
	var name=req.body.name;
	UsersService.checkUserName(name,function(err,data){
		if(err){
			console.log('失败'+err);
		}else {
			if(data.length>0){
				res.send('suc');
			}else{
				res.send('Error: this username is not registered.');
			}
		}
	})
});
router.post('/login',function(req,res){
	var name=req.body.name;
	var pwd=req.body.pwd;
	UsersService.login(name,pwd,function(err,data){
		if(err){
			console.log('失败'+err);
		}else {
			if(data.length>0){
				res.send('suc');
			}else{
				res.send('Error:  The password you entered is incorrect.');
			}
		}
	})
});
//-------------------------------
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

router.post('/delOrder',function(req,res){
	var id=req.body.id;
	UsersService.delOrder(id,function(err,result){
		if(!err){
			res.send('success');
		}
	})
});

module.exports=router;
