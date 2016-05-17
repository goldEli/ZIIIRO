/**
 * Created by Administrator on 2016/5/17.
 */
var React=require('react');
var hashHistory=require("react-router").hashHistory;
var HotItem=React.createClass({
    toDetail:function(){
        hashHistory.push("/details?id="+event.target.getAttribute("data"));
    },
    render:function(){
        var data=this.props.dataHot.product;
        return(
            <div onClick={this.toDetail.bind(this)} className="show_product_box_cell fl">
                <div className="img_box">
                    <img className="show" src={data.imgPathS[1]} alt="img"/>
                    <img className="hide" src={data.imgPathS[0]} data={data['_id']} alt="img"/>
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
exports.HotItem=HotItem;