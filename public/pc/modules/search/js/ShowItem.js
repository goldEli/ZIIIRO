/**
 * Created by Administrator on 2016/5/16.
 */
var React=require('react');
var hashHistory=require("react-router").hashHistory;
var ShowItem=React.createClass({
    toDetail:function(event){
        hashHistory.push("/details?id="+event.target.getAttribute("data"));
    },
    render:function(){
        var data=this.props.data;
        return(
            <div className="search_show_product_box_cell fl">
                <div className="search_img_box" onClick={this.toDetail.bind(this)}>
                    <img className="search_show" src={data.imgPathS[1]} alt="img"/>
                    <img className="search_hide" src={data.imgPathS[0]} data={data['_id']} alt="img"/>
                    <div className="cart_icon fr">
                        <strong>+</strong>
                        <span className="cart_icon_handle"></span>
                    </div>
                </div>
                <div className="search_text_box">
                    <h5>{data.category}</h5>
                    <p>{data.name}</p>
                    <span>{data.price}</span>
                </div>
            </div>
        )
    }
});
exports.ShowItem=ShowItem;