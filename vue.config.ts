const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        port: 5173, // 端口
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true, //支持跨域
                pathRewrite: {
                    // 路径重写
                    '/api': '/userHuang' // 用'/api'代替target里面的地址
                }
            }
        }
    }
})
