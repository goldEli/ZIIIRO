/**
 * Created by Administrator on 2016/5/18.
 */
var React=require('react');
var HomeHotItem=React.createClass({
    render:function(){
        var data=this.props.dataHot.product;
        return(
            <div className="show_product_box_cell fl">
                <div className="img_box">
                    <img className="show" src={data.imgPathS[1]} alt="img"/>
                    <img className="hide" src={data.imgPathS[0]} alt="img"/>
                    <div className="cart_icon fr">
                        <strong>+</strong>
                        <span className="cart_icon_handle"></span>
                    </div>
                </div>
                <div className="text_box">
                    <h5>{data.category}</h5>
                    <p>{data.name}</p>
                    <span>{data.price}</span>
                </div>
            </div>
        )
    }
});
exports.HomeHotItem=HomeHotItem;