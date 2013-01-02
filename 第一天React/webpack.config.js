module.exports = {
	// 入口
	entry: {
		'01': './es/01.es',
		'02': './es/02.es',
		'03': './jsx/03.jsx',
		'04': './jsx/04.jsx',
		'05': './jsx/05.jsx',
		'06': './jsx/06.jsx',
		'07': './jsx/07.jsx',
		'08': './jsx/08.jsx',
		'09': './jsx/09.jsx',
		'10': './jsx/10.jsx'
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
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}