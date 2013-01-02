// 定义模块
module.exports = {
	// 入口
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.js'
		}
	},
	// 入口
	entry: {
		'01': './es/01.es',
		'02': './es/02.es',
		'03': './es/03.es',
		'04': './es/04.es',
		'05': './es/05.es',
		'06': './es/06.es',
		'07': './es/07.es',
		'08': './es/08.es',
		'09': './es/09.es',
		'10': './es/10.es',
		'11': './es/11.es'
	},
	// 发布
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
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// scss
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}