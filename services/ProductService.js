var ProductDAO=require('../DAO/ProductDAO');
exports.showAllProduct=function(func){
	ProductDAO.findALLData(func);
};
exports.search=function(name,price,category,func){
	ProductDAO.findByInput(name,price,category,func);
};
exports.details=function(id,func){
	ProductDAO.findById(id,func);
};