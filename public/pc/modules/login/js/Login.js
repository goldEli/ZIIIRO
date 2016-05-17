var React=require('react');
var hashHistory=require("react-router").hashHistory;
require('../css/login.css');
var Login=React.createClass({
	componentDidMount:function(){
		var warn=this.refs.warn;
		var warnBox=this.refs.warnBox;
		var userNameR=this.refs.userNameR;
		var pwdR=this.refs.pwdR;

		var userNameL=this.refs.userNameL;
		var pwdL=this.refs.pwdL;
		function userNameWarnR(){
			$(warn).html('Error: Please provide a valid email address.');
		};
		function pwdWarnR(){
			$(warn).html('Error: Please enter a stronger password.');
		};
		function userNameWarnL(){
			$(warn).html('Error: Invalid username.');
		};
		function pwdWarnL(){
			$(warn).html('The password you entered is incorrect.');
		};
		/**登录验证*/
		$(this.refs.loginBtn).click(function(){
			if($(userNameL).val()){
				$.ajax({
					type:'post',
					url:'/users/checkUserName',
					data:{
						name:$(userNameL).val()
					},
					success:function(data){
						if(data=='suc'){
							if($(pwdL).val()){
								$.ajax({
									type:'post',
									url:'/users/login',
									data:{
										name:$(userNameL).val(),
										pwd:$(pwdL).val()
									},
									success:function(data){
										if(data=='suc'){
											hashHistory.push('/');
										}else{
											$(warn).css({'backgroundColor':'#b20000'});
											$(warnBox).show();
											$(warn).html(data);
										}
									}
								});
							}else{
								$(warn).css({'backgroundColor':'#b20000'});
								$(warnBox).show();
								$(warn).html('Error:Password is required.');
							}
						}else{
							$(warn).css({'backgroundColor':'#b20000'});
							$(warnBox).show();
							$(warn).html(data);
						}
					}
				});
			}else{
				$(warn).css({'backgroundColor':'#b20000'});
				$(warnBox).show();
				$(warn).html('Error:Username is required.');
			}
		});
		/**注册验证*/
		var userOk=false;
		var pwdOk=false;
		//验证注册用户
		function userValidR(){
			if(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test($(userNameR).val())){
				$.ajax({
					type:'post',
					url:'/users/checkUserName',
					data:{
						name:$(userNameR).val()
					},
					success:function(data){
						if(data=='suc'){
							$(warnBox).show();
							$(warn).css({'backgroundColor':'#b20000'});
							$(warn).html('Error:Username is existed.');
							userOk=false;
						}else{
							$(warnBox).hide();
							$(warn).html('');
							userOk=true;
						}
					}
				});
			}else{
				$(warn).css({'backgroundColor':'#b20000'});
				$(warnBox).show();
				$(warn).html('');
				userNameWarnR();
				userOk=false;
			}
		}
		//验证注册密码
		function pwdValidR(){
			if(/^[a-zA-Z0-9]{4,24}$/.test($(pwdR).val()) ){
				var arr=$(pwdR).val();
				var hasNum=false;
				var hasLetter=false;
				for(var i=0;i<arr.length;++i){
					if(/^[0-9]$/.test(arr[i])){
						hasNum=true;
					}
					if(/^[a-zA-Z]$/.test(arr[i])){
						hasLetter=true;
					}
					if(hasNum && hasLetter){
						$(warnBox).hide();
						$(warn).html('');
						pwdOk=true;
					}else{
						pwdOk=false;
						$(warn).css({'backgroundColor':'#b20000'});
						$(warnBox).show();
						$(warn).html('');
						pwdWarnR();
					}
				}
			}else{
				pwdOk=false;
				$(warn).css({'backgroundColor':'#b20000'});
				$(warnBox).show();
				$(warn).html('');
				pwdWarnR();
			}
		}
		$(userNameR).change(function(){
			userValidR();
		});
		$(pwdR).change(function(){
			pwdValidR();
		});
		$(this.refs.regBtn).click(function(){
			userValidR();
			pwdValidR();
			if(userOk && pwdOk){
				$.ajax({
					type:"post",
					url:'/users/addUser',
					data:{
						name:$(userNameR).val(),
						pwd:$(pwdR).val()
					},
					success:function(){
						$(warnBox).show();
						$(warn).css({'backgroundColor':'green'});
						$(warn).html('RegisterSuccess , Please login!');
					}
				});
			}
			if(userOk){
				pwdValidR();
			}else{
				userValidR();
			}
		});
	},
	pwdStrength:function(){
		var pwdR=this.refs.pwdR;
		var pwdStrength=this.refs.pwdStrength;
		var pwdStrengthNote=this.refs.pwdStrengthNote;
		if(/^[a-zA-Z0-9]{4,24}$/.test($(pwdR).val()) ) {
			var arr = $(pwdR).val();
			var hasNum = false;
			var hasLetter = false;
			for (var i = 0; i < arr.length; ++i) {
				if (/^[0-9]$/.test(arr[i])) {
					hasNum = true;
				}
				if (/^[a-zA-Z]$/.test(arr[i])) {
					hasLetter = true;
				}
				if (hasNum && hasLetter) {
					$(pwdStrength).html('Strong');
					$(pwdStrengthNote).html('');
				} else {
					$(pwdStrength).html('Very weak - Please enter a stronger password.');
					$(pwdStrengthNote).html('The password should be at least seven characters long. To make it stronger, use upper and lower case letters, numbers and symbols like ! " ? $ % ^  ).');
				}
			}
		}else{
			$(pwdStrength).html('Very weak - Please enter a stronger password.');
			$(pwdStrengthNote).html('The password should be at least seven characters long. To make it stronger, use upper and lower case letters, numbers and symbols like ! " ? $ % ^  ).');
		}
	},
	render(){
		return (
			<div className="login_and_register">
				<div ref="warnBox" className="warn">
					<p ref="warn"></p>
				</div>
				<div className="input_box">
					<div className="login fl">
						<h2>LOGIN</h2>
						<div className="login_grid">
							<p>Username or email address</p>
							<input ref="userNameL" type="text"/>
						</div>
						<div className="login_grid">
							<p>Password</p>
							<input ref="pwdL" type="password"/>
						</div>
						<div className="login_grid">
							<a ref="loginBtn" href="javascript:">LOGIN</a>
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
							<input ref="userNameR" type="text"/>
						</div>
						<div className="login_grid">
							<p>Password</p>
							<input ref="pwdR" onChange={this.pwdStrength.bind(this)} type="password"/>
							<div className="safe_note">
								<h4 ref="pwdStrength"></h4>
								<small ref="pwdStrengthNote"></small>
							</div>
						</div>
						<div className="login_grid">
							<a ref="regBtn" href="javascript:">REGISTER</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
exports.Login=Login;