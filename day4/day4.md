# 生命周期

构造函数
构造函数在实例化，会经历每一个周期，你可以把对应的逻辑放在对应的周期
把逻辑以一种面向对象的形式写在选项里面

生命周期是一种特殊的选项

```js
var vm = new Vue({
    // 选项
    el: '#demo',
    data: {
        name: 'yao'
    },
    created() {
        setTimeout(() => {
            vm.name = 'jing'
        }, 2000)
    },
    // this === vm
})
// setTimeout(() => {
//     vm.name = 'jing'
// }, 2000)
// console.log(vm)
```

创建前，Vue会初始化事件和生命周期，所以你可以使用methods和beforeCreated

一般不建议直接操作真实DOM
```
document.querySelector('xxx').style.color = "red"
```

要去修改视图，用vue的方法，指令 v->m m->v

创建前后，和挂载前后都只会在Vue实例化的时候执行一次

虚拟DOM，一棵树

动态组件

- activated
- deactivated
- beforeDestroy
- destroyed