module.exports = {
	lintOnSave: false,
	 css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-plugin-px2rem')({
						rootValue:75,      // 设置转换基数，会自动根据该 基数进行rem值转换，如设置75，页面写入高度175px 则== 1775/75rem,该值通常根据设计稿等分数进行计算，使用淘宝方案等分就是10份
						mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
						minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
						exclude: /(node_module)/, // 排除指定的包，不对其进行转换，通常用于指定第三方包，默认为false
					}),
				]
			}
		}
	},
	 devServer: {
	    proxy: {
	      '/api': {
	        target: 'https://m.you.163.com',
	        ws: true,
	        changeOrigin: true,
					pathRewrite: {
						'^/api': ''
					}
	      },
				'/api2': {
				  target: 'http://localhost:3000',
				  ws: true,
				  changeOrigin: true,
					pathRewrite: {
						'^/api2': ''
					}
				}
	    }
	  },
   productionSourceMap: false // 关闭map文件，减小项目体积
}


