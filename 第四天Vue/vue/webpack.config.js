// 配置
module.exports = {
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.js'
		}
	},
	// 入口
	entry: './modules/main.es',
	// 发布
	output: {
		filename: './dist/main.js'
	},
	// 加载机
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
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// sass
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
}