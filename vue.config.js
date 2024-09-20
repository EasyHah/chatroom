const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    hot: true,//自动保存
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 代理的目标后端接口
        secure: true, // 如果是 https 接口，需要配置这个参数
        changeOrigin: true, // 是否改变请求头中的 origin 字段
        pathRewrite: {
          '^/api': '', // 重写匹配的字段，把 /api 转为 /
        },
      },
    },
  },
})
