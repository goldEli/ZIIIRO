/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link = require("react-router").Link;
var Main=React.createClass({
    render:function(){
        return(
            <div className="wrap">
                <div className="header">
                    <div className="header_left fl">
                        <Link to="/home"><img src="images/logo-big.png" alt="logo"/></Link>
                        <div className="header_nav fl">
                            <Link to="/search"><span><a href="javascript:">SHOP</a></span></Link>
                            <Link to="/details"><span><a href="javascript:">SUPPORT</a></span></Link>
                            <span><a href="javascript:">NEWS</a></span>
                            <span><a href="javascript:">RESELLERS</a></span>
                            <span><a href="javascript:">ABOUT</a></span>
                        </div>
                    </div>
                    <div className="header_right fr">
                        <div className="cart_icon fr">
                            <Link to="/order"><strong>4</strong></Link>
                            <span className="cart_icon_handle"></span>
                        </div>
                        <div className="header_right_nav fr">
                            <Link to="/login"><span><a href="javascript:">LOGIN</a></span></Link>
                            <span><a href="javascript:">CART&nbsp;&nbsp;/&nbsp;&nbsp;$87.5</a></span>
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