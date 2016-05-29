var UsersDAO=require('../DAO/UsersDAO');

exports.addUser=function(name,pwd,func){
	UsersDAO.addData(name,pwd,func);
};
exports.checkUserName=function(name,func){
	UsersDAO.findByName(name,func);
};
exports.login=function(name,pwd,func){
	UsersDAO.findByNamePwd(name,pwd,func);
};
//-----------------------
exports.showAllProduct=function(func){
	UsersDAO.findALLData(func);
};
exports.checkShoppingCar=function(name,func){
	UsersDAO.findByName(name,func);
};
exports.delOrder=function(id,func){
	UsersDAO.delData(id,func);
};