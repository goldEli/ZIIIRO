/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link = require("react-router").Link;
var hashHistory=require("react-router").hashHistory;
var Main=React.createClass({
    getInitialState: function(){
        return {
            sessionName: [],
            totalPrice:0,
            uid:[],
            orderNum:0
        };
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
        console.info(this.state.uid);
        if(this.state.uid){
            $.ajax({
                type:'post',
                url:'/cart/showAll',
                data:{
                    uid:this.state.uid
                },
                success:function(data){
                    console.info('1'+data.length);
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
                    console.info('2'+data.length);
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
            <div className="wrap">
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
                            <span><a href="javascript:">CART&nbsp;&nbsp;/&nbsp;&nbsp;$<i>{this.state.totalPrice}</i></a></span>
                        </div>
                    </div>
                </div>
                {this.props.children}
                <div className="footer">
                    <div className="footer_box">
                        <div className="footer_box_cell fl">
                            <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                            <p>Email&nbsp;</p><i>*</i>
                            <input type="text"/>
                            <button>SUBSCRIBE!</button>
                        </div>
                        <div className="footer_box_cell fl">
                            <h1>GET IN TOUCH!</h1>
                            <p>Please feel free to join our social channels and get in touch with us and our customers and fans.</p>
                        </div>
                        <div className="footer_box_cell fl">
                            <h1>YOUR ACCOUNT</h1>
                            <a href="javascript:"><h5>my account</h5></a>
                            <a href="javascript:"><h5>wishlist</h5></a>
                            <a href="javascript:"><h5>cart</h5></a>
                            <a href="javascript:"><h5>checkout</h5></a>
                        </div>
                        <div className="footer_box_cell fl">
                            <h1>YOUR ACCOUNT</h1>
                            <a href="javascript:"><h5>shop</h5></a>
                            <a href="javascript:"><h5>support</h5></a>
                            <a href="javascript:"><h5>news</h5></a>
                            <a href="javascript:"><h5>resellers</h5></a>
                            <a href="javascript:"><h5>about</h5></a>
                        </div>
                    </div>
                    <div className="copyRight">
                        <p className="fl">Copyright 2014 &copy; <a href="javascript:">ZIIIRO</a> — Contact us — Terms of Use — Privacy Policy</p>
                        <img className="fr" src="images/payment.png" alt="img"/>
                    </div>
                </div>
            </div>
        )
    }
});
exports.Main=Main;