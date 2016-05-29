/**
 * Created by Administrator on 2016/5/16.
 */
var HotDAO=require('../DAO/HotDAO');

exports.showAllProduct=function(func){
    HotDAO.findALLData(func);
};