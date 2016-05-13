/**
 * Created by Administrator on 2016/5/13.
 */
var React=require('react');
var Link=require('react-router').Link;
var Login=React.createClass({
    render:function(){
        return(
            <div className="login_and_register">
                <div className="warn">
                    <p>Error: Please provide a valid email address.</p>
                </div>
                <div className="input_box">
                    <div className="login fl">
                        <h2>LOGIN</h2>
                        <div className="login_grid">
                            <p>Username or email address</p>
                            <input type="text"/>
                        </div>
                        <div className="login_grid">
                            <p>Password</p>
                            <input type="password"/>
                        </div>
                        <div className="login_grid">
                            <a href="javascript:">LOGIN</a>
                        </div>
                        <div className="login_grid">
                            <input className="checkbox" type="checkbox"/><span>Remember me</span>
                        </div>
                        <a href="javascript:"><h5>Lost your password?</h5></a>
                    </div>
                    <div className="register fl">
                        <h2>REGISTER</h2>
                        <div className="login_grid">
                            <p>Email address</p>
                            <input type="text"/>
                        </div>
                        <div className="login_grid">
                            <p>Password</p>
                            <input type="password"/>
                            <div className="safe_note">
                                <h4>Very weak - Please enter a stronger password.</h4>
                                <small>The password should be at least seven characters long. To make it stronger, use upper and lower case letters, numbers and symbols like ! " ? $ % ^  ).</small>
                            </div>
                        </div>
                        <div className="login_grid">
                            <a href="javascript:">REGISTER</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
exports.Login=Login;