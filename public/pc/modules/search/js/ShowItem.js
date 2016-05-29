/**
 * Created by Administrator on 2016/5/16.
 */
var React=require('react');
var hashHistory=require("react-router").hashHistory;
var ShowItem=React.createClass({
    toDetail:function(event){
        hashHistory.push("/details?id="+event.target.getAttribute("data")+'&uid='+this.props.uid);
    },
    add:function(event){
        console.info(this.props.uid);
        if(!this.props.uid){
            hashHistory.push("/login");
        }else{
            $.ajax({
                type:'post',
                url:'/cart/add',
                data:{
                    pid:event.target.getAttribute("data"),
                    uid:this.props.uid
                },
                success:function(){
                    hashHistory.push('/search?uid='+this.props.uid);
                }.bind(this)
            });
        }

    },
    render:function(){
        var data=this.props.data;
        return(
            <div className="search_show_product_box_cell fl">
                <div className="search_img_box" >
                    <img className="search_show" src={data.imgPathS[1]} alt="img"/>
                    <img className="search_hide" onClick={this.toDetail} src={data.imgPathS[0]} data={data['_id']} alt="img"/>
                    <div className="cart_icon fr">
                        <strong onClick={this.add} data={data['_id']}>+</strong>
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