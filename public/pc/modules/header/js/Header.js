/**
 * Created by Administrator on 2016/5/18.
 */
require('../css/header.css');
var React=require('react');
var Link=require('react-router').Link;
var hashHistory=require("react-router").hashHistory;
var Header=React.createClass({
    getInitialState: function(){
        return {
            sessionName: [],
            totalPrice:0,
            uid:[],
            orderNum:0
        };
    },
    getTotal:function(data){
        var totalPrice=0;
        for(var i=0 ;i<data.length;++i){
            var count=parseInt(data[i].count);
            var price=data[i].product.price;
            var total=parseInt(price.substring(1))*count;
            totalPrice+=total;
        }
        this.setState({
            totalPrice:totalPrice
        })
    },
    getSession:function(){
        $.ajax({
            type:'post',
            url:'/users/getSession',
            success:function(data){
                this.getOrderNum(data[1]);
                this.setState({
                    sessionName:data[0],
                    uid:data[1]
                })
            }.bind(this)
        });
    },
    getOrderNum:function(uid){
        if(this.state.uid){
            $.ajax({
                type:'post',
                url:'/cart/showAll',
                data:{
                    uid:this.state.uid
                },
                success:function(data){
                    this.getTotal(data);
                    this.setState({orderNum:data.length});
                }.bind(this)
            });
        }
        if(uid!=[]){
            $.ajax({
                type:'post',
                url:'/cart/showAll',
                data:{
                    uid:uid
                },
                success:function(data){
                    this.setState({orderNum:data.length});
                }.bind(this)
            });
        }
    },
    componentDidMount:function(){
        //this.getOrderNum();
    },
    componentWillMount:function(){
        this.getSession();
        //this.getOrderNum();
    },
    componentWillReceiveProps:function(){
        this.getSession();
        this.getOrderNum();
    },
    toOrder:function(){
        if(this.state.sessionName==[]){
            hashHistory.push('/login');
        }else{
            hashHistory.push('/order?uid='+this.state.uid);
        }
    },
    render:function(){
        var txt;
        if(this.state.sessionName){
            txt=<span><a href="javascript:">{this.state.sessionName}</a></span>
        }else{
            txt=<Link to="/login"><span><a href="javascript:">LOGIN</a></span></Link>
        }
        return(
            <div className="header_box">
                <div className="header_area"></div>
                <div className="header">
                    <div className="header_left fl">
                        <Link query={{'uid':this.state.uid}} to="/home"><img src="images/logo-big.png" alt="logo"/></Link>
                        <div className="header_nav fl">
                            <Link query={{'uid':this.state.uid}} to="/search"><span><a href="javascript:">SHOP</a></span></Link>
                            <span><a href="javascript:">SUPPORT</a></span>
                            <span><a href="javascript:">NEWS</a></span>
                            <span><a href="javascript:">RESELLERS</a></span>
                            <span><a href="javascript:">ABOUT</a></span>
                        </div>
                    </div>
                    <div className="header_right fr">
                        <div className="cart_icon fr">
                            <strong onClick={this.toOrder}>{this.state.orderNum}</strong>
                            <span className="cart_icon_handle"></span>
                        </div>
                        <div className="header_right_nav fr">
                            {txt}
                            <span><a href="javascript:">cart&nbsp;&nbsp;/&nbsp;&nbsp;${this.state.totalPrice}</a></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
exports.Header=Header;