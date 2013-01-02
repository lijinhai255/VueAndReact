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
	},
	// 修改服务器的配置
	devServer: {
		// 修改端口号
		port: 8081,
		// 默认打开
		// open: true
		// 代理请求
		proxy: {
			// 定义/data/test请求配置
			'/data/test': {
				// 目标地址
				target: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
				// 重写地址
				pathRewrite: {
					'^/data/test': ''
				},
				// 避免校验https协议
				secure: false
			}
		}
	}
}