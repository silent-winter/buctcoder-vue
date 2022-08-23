module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    // 以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { // 配置跨域
      '/coder': {
        target: 'http://1.117.233.17:81/',
        ws: true,
        changOrigin: true
      }
    }
  }
}
