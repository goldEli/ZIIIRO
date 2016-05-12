/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var Main=React.createClass({
    render:function(){
        return(
            <div className="wrap">
                <div className="header">
                    <div className="left_box">
                        <div className="more_btn fl">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="middle_box">
                        <img src="images/logo-big.png" alt="logo"/>
                    </div>
                    <div className="right_box">
                        <div className="cart_icon fr">
                            <Link to="/order"><strong>4</strong></Link>
                            <span className="cart_icon_handle"></span>
                        </div>
                    </div>
                </div>
                <div className="footer">

                </div>
            </div>
        )
    }
});
exports.Main=Main;