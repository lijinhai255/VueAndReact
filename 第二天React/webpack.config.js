module.exports = {
	// 入口
	entry: {
		// '01': './jsx/01.jsx',
		// '02': './jsx/02.jsx',
		// '03': './jsx/03.jsx',
		// '04': './jsx/04.jsx',
		// '05': './jsx/05.jsx',
		// '06': './jsx/06.jsx',
		// '07': './jsx/07.jsx',
		// '08': './jsx/08.jsx',
		// '09': './jsx/09.jsx',
		// '10': './jsx/10.jsx',
		// '11': './jsx/11.jsx',
		// '12': './jsx/12.jsx',
		// '13': './jsx/13.jsx',
		'14': './jsx/14.jsx',
		'15': './jsx/15.jsx',
		'16': './jsx/16.jsx'
	},
	// 发布
	output: {
		filename: './dist/[name].js'
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
					presets: ['react', 'es2015']
				}
			},
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
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