module.exports = {
	entry: {
		IndexMain:'./js/index.js'
	},
	output:{
		path:'./dist',
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
			{ test: /\.js$/, loader: 'jsx-loader?harmony' },
			{ test: /\.css$/, loader: "style-loader!css-loader"},
			{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	}
	// resolve:{
	// 	root:path.join(__dirname,'public'),
	// 	extensions: ['', '.js'],
	// 	alias:{
	// 		"Reg":"modules/reg/js/Reg",
	// 		"Login":"modules/login/js/Login",
	// 		"index":"modules/index/js/Index"
	// 	}
	// }
};