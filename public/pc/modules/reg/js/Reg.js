var React=require('react');
class Reg extends React.Component{
	render(){
		return (
			<div>
				<div>
					用户：<input type="text"/>
				</div>
				<div>
					密码：<input type="text"/>
				</div>
				<div>
					重新输入密码：<input type="text"/>
				</div>
				<div>
					<input type="button" value="提交"/>
				</div>
			</div>
		)
	}
}
exports.Reg=Reg;