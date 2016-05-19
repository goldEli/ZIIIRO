/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var hashHistory=require("react-router").hashHistory;
var Main=React.createClass({

    render:function(){
        return(
            <div>
                <div className="wrap">

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