/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var hashHistory=require("react-router").hashHistory;
var Main=React.createClass({
    hideSideBar:function(){
           $(this.refs.side_bar).css({'left':'-5.2rem'});
           $(this.refs.side_bar_background).css({'opacity':'0'});
           $(this.refs.side_bar_background).css({'zIndex':'-1'});
    },
    sideBar:function(){
        console.info(this.refs.side_bar);
        $(this.refs.side_bar).css({'left':'0'});
        $(this.refs.side_bar_background).css({'zIndex':'2'});
        $(this.refs.side_bar_background).css({'opacity':'0.6'});
    },
    toSearch:function(){
        this.hideSideBar();
        hashHistory.push('/search');
    },
    toLogin:function(){
        this.hideSideBar();
        hashHistory.push('/login');
    },
    render:function(){
        return(
            <div>
                <div className="wrap">
                    <div className="side_bar" ref="side_bar">
                        <h3 onClick={this.toSearch.bind(this)}>SHOP</h3>
                        <h3>SUPPORT</h3>
                        <h3>NEWS</h3>
                        <h3>RESELLERS</h3>
                        <h3>ABOUT</h3>
                        <h3 onClick={this.toLogin.bind(this)}>LOGIN</h3>
                    </div>
                    <div onClick={this.hideSideBar.bind(this)} className="side_bar_background" ref="side_bar_background"></div>
                    <div className="header">
                        <div className="left_box">
                            <div onClick={this.sideBar.bind(this)} className="more_btn fl">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="middle_box">
                            <Link to="/home"><img src="images/logo-big.png" alt="logo"/></Link>
                        </div>
                        <div className="right_box">
                            <div className="cart_icon fr">
                                <Link to="/order"><strong>4</strong></Link>
                                <span className="cart_icon_handle"></span>
                            </div>
                        </div>
                    </div>
                    {this.props.children}
                    <div className="footer">
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
                        <div className="footer_box_cell fl">
                        </div>
                    </div>
                </div>
                <div className="copyRight">
                    <p>Copyright 2014 &copy; <a href="javascript:">ZIIIRO</a> — Contact us — Terms of Use — Privacy Policy</p>
                    <img src="images/payment.png" alt="img"/>
                </div>
            </div>
        )
    }
});


exports.Main=Main;