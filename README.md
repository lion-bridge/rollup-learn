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