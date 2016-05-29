#ZIIIRO
##项目需求
* pc端和移动端
* 前端框架：reactJS
* 模块加载器：webpack
* 后台框架：nodeJS
* 登录注册：正则验证、用户名查重
* 首页：轮播、动态加载热门商品
* 商品页面：可进行搜索
* 详情页面：点击商品可进入该商品的详情页面
* 订单系统
	* 任意页面添加商品，都可以时时显示商品数量和总金额
	* 进入订单页面，显示所有订单信息（商品、数量、单价、总计）
	* 在订单页面，可以对商品进行删除，数量修改
##思路
* 先做pc端，后做移动端。在做pc端的时候考虑代码对移动端的可重用性
* 组件的划分：main（主页面）、header(页头)、home（首页）、details（详情）、login&reg（登录注册）、search（搜索页面）、order（订单）
	* 路由划分：
		* 主路由：main
		* 子路由：home、order、dtails、login&reg、search
	* 每个页面都有页头和页脚都相同，可以都放入mian组件，但是由于header上显示的信息都需要和各个页面进行数据交互，所以将header独立成一个组件，作为子组件加入到各个页面的组件中

##项目流程
* 配置nodejs环境（express init）
	* 通过npm安装webpack、react、reactdom、react-router等模块
	* 在appjs中配置端口
* 将各个页面的html、css静态内容勾勒出来，然后将页面组件化，用react-router将各个页面链接起来
* 为各个页面添加js效果，比如轮播，放大镜等效果
* 创建数据库
* 搭建后台三层架构
* 实现页面交互
##注意事项
###组件之间的数据传输
* 父组件传到子组件用this.props;子组件传到父组件用回调
###组件生命周期
* componentWillMount
	* 在完成首次渲染之前调用，此时仍可以修改组件的state
* componentDidMount
	* 真实的DOM被渲染出来后调用，此时可以访问到真实的DOM，可用jquery等类库操作这个DOM
* componentWillReceiveProps
	* 组件收到心的props时候调用
	<pre>
	componentWillReceiveProps:function(nextProps){
		if(nextProps.bool){
			this.setState({bool:true})
		}
	}
	</pre>
* 必选的方法，创建虚拟DOM，该方法具有特殊的规则：
	* 只能通过this.props this.state访问数据
	* 可以返回null、false、或者React组件
	* 只能出现一个顶级组件（不能返回数组）
	* 不能改变组件状态
	* 不能改变DOM输出
###react路由之间的数据传输
* 主路由通过this.props.children加载子路由内容.但是主路由和子路由之间不能进行数据传输。为了解决这个问题，可以通过hashhistory.push('/home?id='+id)改变浏览器地址，传递到home页面，home通过this.props.location.query.id获取到id的信息
###状态机
* react把组件看成一个状态机。通过与用户的交互，实现用户界面和数据保持一直
* **state并不是变量存储容器，只有数据于render的虚拟DOM绑定后才用state**