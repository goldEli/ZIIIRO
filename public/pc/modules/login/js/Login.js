
class Login extends React.Component{
	render(){
		return (
			<div>
				<div>
					用户：<input type="text"/>
				</div>
				<div>
					密码：<input type="password"/>
				</div>
				<div>
					<input type="button" value="登录"/>
				</div>
			</div>
		)
	}
}
exports.Login=Login;