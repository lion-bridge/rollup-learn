import {get} from 'request';

get('https://image.zhongxiaokj.com/product_data_icon/icon.json',{
    headers:{
        token: 'xxx'
    }
},(err, res, body) => {
    console.log('err=', err)
    console.log('res=', res)
    console.log('body=', body)
})

// rollup编译：yarn run rollup src/index.js -f cjs -o build/index.js
// 编译将ES6的`import`语法转换为CommonJs的`require`语法
