1. 第一步先初始化npm init
2. 下载对应的依赖的包 art-template,express-art-template
3. 创建服务器 同时配置art-template的服务端配置项目
    * app.engine('html',require('express-art-template'));
4. 直接使用 response.render(data)