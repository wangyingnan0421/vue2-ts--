module.exports = {
    devServer: {
        port: 8080, //本机端口号
        host: "localhost", //本机主机名
        https: false, //协议
        open: false, //启动服务器时自动打开浏览器访问
        proxy: {
            '/api': {
                //  请求/api就是请求http://localhost:3000;  
                //eg:/api/login 就是请求http://localhost:3000/login
                target: "http://localhost:3000",
                changOrigin: true, //开启代理
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}