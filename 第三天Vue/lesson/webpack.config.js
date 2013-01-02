// 配置
module.exports = {
	// vue入口
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.js'
		}
	},
	// 入口
	entry: {
		'01': './es/01.es'
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
			}
		]
	}
}