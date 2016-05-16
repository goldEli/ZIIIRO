var ProductDAO=require('../DAO/ProductDAO');
exports.showAllProduct=function(func){
	ProductDAO.findALLData(func);
};