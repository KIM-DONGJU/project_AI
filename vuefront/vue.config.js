module.exports = {
    devServer: { // API 요청이 있을 때 어디에서 처리할지를 설정함
        proxy: {
            '/api': {
                target: 'http://backend:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false,
    outputDir: '../backend/public' // 배포 파일의 위치를 지정함
}