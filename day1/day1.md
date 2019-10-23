# Vue

尤大大 Google设计师

- jquery pc霸主
- angular node 08-15 pc一大霸主 Google andriod

移动端的东风

- react 15 Facebook
- vue 15 @Vue

vue最轻的一个框架，源码最少的框架

vue2.0 vue3.xxAplah 预览版本

vue view 注重视图层，Vue 的核心库只关注视图层

# 安装

适合学习
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="./vue.js"></script>
    <script>
        // 如果拟引入成功，会有一个全局的Vue的构造函数
        console.log(Vue)
    </script>
</body>
</html>
```
构造大型项目，配合Node的webpack和npm
```bash
# 最新稳定版
$ npm install vue
```
`vue-cli`可以一键安装整个开发环境

这里实例化这个函数，会得到一个实例对象，再实例化的时候里面可以放入多个选项
```js
const vm = new window.Vue({
    // 选项
    // https://cn.vuejs.org/v2/api/
    
    // 以后可以放入很多参数
})
```
vm就是实例化之后的对象，view->model

Vue使用`{{}}`声明式渲染
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <!-- View -->
    <div id="app">
        <!-- view的作用域 -->
        <p>{{name}}</p>
    </div>
    <p>{{name}}</p>
    <script src="./vue.js"></script>
    <script>
        const vm = new window.Vue({
            // V
            el: "#app",
            // M
            data: {
                name: 'yao'
            }
        })
    </script>
    <!-- 数据 视图分开管理 数据驱动视图 -->
</body>
</html>
```
