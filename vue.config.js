module.exports = {
	assetsDir: 'static',
	productionSourceMap: false,
	devServer: {
		host: '192.168.10.175',
		disableHostCheck: true,
	},
	chainWebpack: config => {
		config.resolve.symlinks(true)
	}
}
