module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: [ 'ie>=8', '>1% in CN', 'iOS >= 8', 'Android >= 4' ]
		}),
		require('postcss-plugin-px2rem')({
            rootValue: 100, //你在html节点设的font-size大小
            exclude:'/?!(node_modules\/antd-mobile)|src|node_modules\/antd/',
			// unitPrecision: 5, //转rem精确到小数点多少位
			// propList: [ 'font', 'font-size', 'line-height', 'letter-spacing' ], //指定转换成rem的属性，支持 * ！
			// selectorBlackList: [], // str/reg 指定不转换的选择器，str时包含字段即匹配
			// replace: true,
			// mediaQuery: false, //媒体查询内的px是否转换
			minPixelValue: 1.00001 //小于指定数值的px不转换 })
		})
	]
};
