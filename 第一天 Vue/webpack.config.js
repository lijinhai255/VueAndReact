// 基于commonjs规范定义配置
module.exports = {
	// 更改vue入口文件
	resolve: {
		// 模块别名
		alias: {
			vue$: 'vue/dist/vue.js'
		}
	},
	// 将es中的文件，发布到dist目录下，并且文件名称是.js
	// 入口文件
	entry: {
		'03': './es/03.es',
		'04': './es/04.es',
		'05': './es/05.es',
		'06': './es/06.es',
		'07': './es/07.es',
		'08': './es/08.es',
		'09': './es/09.es',
		'10': './es/10.es',
		'11': './es/11.es',
		'12': './es/12.es'
	},
	// 发布文件
	output: {
		filename: './dist/[name].js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.es$/,
				// 添加插件
				// loader: 'babel-loader?presets[]=es2015'
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// css
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// sass
			// {
			// 	test: /\.scss$/,
			// 	loader: 'style-loader!css-loader!sass-loader'
			// }
		]

	}
}