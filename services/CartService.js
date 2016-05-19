/**
 * Created by Administrator on 2016/5/18.
 */
var CartDAO=require('../DAO/CartDAO');
exports.add=function(arr,func){
  CartDAO.findById(arr,function(data){
      if(data.length>0){
          CartDAO.update([data[0]._id,++data[0].count],func);
      }else{
          CartDAO.add(arr,func);
      }
  });
};
exports.addMinus=function(arr,func){
    CartDAO.findById(arr,function(data){
        if(data.length>0){
            CartDAO.update([data[0]._id,--data[0].count],func);
        }
    });
};
exports.showAll=function(uid,func){
    CartDAO.findAll(uid,func)
};
exports.del=function(id,func){
    CartDAO.del(id,func)
};