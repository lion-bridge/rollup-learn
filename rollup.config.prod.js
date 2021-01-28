// import resolve from 'rollup-plugin-node-resolve'
var resolve = require('rollup-plugin-node-resolve')
export default {
    input: 'src/index.js',
    output: {
        file: 'build/index.js',
        format: 'cjs',// 格式化为commonJs模块规范
    },
    plugins: [ 
        resolve, // `rollup-plugin-node-resolve`插件处理打包警告`(!) Unresolved dependencies`
    ]
}