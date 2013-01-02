// 定义配置
module.exports = {
	// 拓展名
	resolve: {
		extensions: ['.js', '.jsx']
	},
	// 入口文件
	entry: './modules/main.jsx',
	// 发布文件
	output: {
		filename: './dist/main.js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}