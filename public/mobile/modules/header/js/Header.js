/**
 * Created by Administrator on 2016/5/19.
 */
var React=require('react');
var Link=require('react-router').Link;
var hashHistory=require("react-router").hashHistory;
var Header=React.createClass({
    getInitialState: function(){
        return {
            sessionName: null,
            totalPrice:0,
            uid:[],
            orderNum:0
        };
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
                    //this.getTotal(data);
                    this.setState({orderNum:data.length});
                }.bind(this)
            });
        }
        if(uid){
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
    getSession:function(){
        $.ajax({
            type:'post',
            url:'/users/getSession',
            success:function(data){
                //this.getOrderNum(data[1]);
                if(data){
                    this.getOrderNum(data[1]);
                    this.setState({
                        sessionName:data[0],
                        uid:data[1]
                    })
                }
            }.bind(this)
        });
    },
    componentWillMount:function(){
        this.getSession();
        //this.getOrderNum();
    },
    componentWillReceiveProps:function(){
        this.getSession();
        //this.getOrderNum();
    },
    toOrder:function(){
        if(!this.state.sessionName){
            hashHistory.push('/login');
        }else{
            hashHistory.push('/order?uid='+this.state.uid);
        }
    },
    hideSideBar:function(){
        $(this.refs.side_bar).css({'left':'-5.2rem'});
        $(this.refs.side_bar_background).css({'opacity':'0'});
        $(this.refs.side_bar_background).css({'zIndex':'-1'});
    },
    sideBar:function(){
        $(this.refs.side_bar).css({'left':'0'});
        $(this.refs.side_bar_background).css({'zIndex':'2'});
        $(this.refs.side_bar_background).css({'opacity':'0.6'});
    },
    toSearch:function(){
        this.hideSideBar();
        hashHistory.push('/search?uid='+this.state.uid);
    },
    toLogin:function(){
        this.hideSideBar();
        hashHistory.push('/login?uid='+this.state.uid);
    },
   render:function(){
       var txt;
       if(this.state.sessionName){
           txt=<h3>{this.state.sessionName}</h3>
       }else{
           txt=<h3 className="header_login" onClick={this.toLogin}>LOGIN</h3>
       }
       return(
           <div className="header">
               <div className="side_bar" ref="side_bar">
                   <h3 onClick={this.toSearch}>SHOP</h3>
                   <h3>SUPPORT</h3>
                   <h3>NEWS</h3>
                   <h3>RESELLERS</h3>
                   <h3>ABOUT</h3>
                   {txt}
               </div>
               <div onClick={this.hideSideBar} className="side_bar_background" ref="side_bar_background"></div>

               <div className="left_box">
                   <div className="more_btn fl" onClick={this.sideBar}>
                       <span></span>
                       <span></span>
                       <span></span>
                   </div>
               </div>
               <div className="middle_box">
                   <Link query={{'uid':this.state.uid}} to="/home"><img src="images/logo-big.png" alt="logo"/></Link>
               </div>
               <div className="right_box">
                   <div className="cart_icon fr">
                       <strong onClick={this.toOrder}>{this.state.orderNum}</strong>
                       <span className="cart_icon_handle"></span>
                   </div>
               </div>
           </div>
       )
   }
});
exports.Header=Header;