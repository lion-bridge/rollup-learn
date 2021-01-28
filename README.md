# rollup-learn 学习
## 编译：yarn run build (npm run build)

## 1.rollup与webpack有什么区别
- rollup主要针对js模块进行打包，webpack不仅针对js模块，还有html/css等静态资源


## 2.[requestjs](https://github.com/request/request)最为node最火爆的http请求库，已经过期了，跟axios有什么区别
过期的意思是
- 1.request不再应用以后的新特性
- 2.以后不会出现破坏性升级
- 3.继续修改bug

## 3.CommonJs与AMD什么区别

nodejs采用的[CommonJs规范](https://javascript.ruanyifeng.com/nodejs/module.html)，同步加载，加载完成之后才执行代码。

**区别：**
- 1.CommonJs是同步加载，所有文件加载完才能运行代码；AMD是异步加载，加载模块的过程中可以执行代码，浏览器采用这种模式


## 4.如何发布一个npm库
## 5.写一个登陆/注册页面
- 1.使用`jwt-token`做登陆校验
- 2.不使用数据库，数据保存为properties文件
- 3.包含3个页面-登陆/注册/主页
- 4.使用rollup打包
- 5.页面请求使用`request.js`
- 6.node服务使用`http`模块
- 7.将token校验过程打包成npm库，并发布
- 8.最后部署到服务器上