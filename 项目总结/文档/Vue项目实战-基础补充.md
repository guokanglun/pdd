# Vue项目实战-基础补充

## 零、开篇引导

### 1. 指令综合案例

### 2. 数据持久化

- ajax

	- vue-resouce
	- axios

- 本地化

	- 1. webstorage

		- 本地存储，存储在客户端，包括localStorage和sessionStorage

	- 2. localStorage

		- localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。
		- 存放数据大小为一般为5MB,而且它仅在客户端（即浏览器）中保存，不参与和服务器的通信。

	- 3. 常用API

		- localStorage.setItem("key","value");

			- 以“key”为名称存储一个值“value”

		- localStorage.getItem("key");

			- 获取名称为“key”的值

		- localStorage.removeItem("key");

			- 删除名称为“key”的信息

		- localStorage.clear();

			- 清空localStorage中所有信息

## 一、概念补充

### MVC和MVVM的区别？

-  1. MVC

	- 1. 概念

		- M是指业务模型，V是指用户界面，C则是控制器

			- M即model模型,  数据层，负责数据的处理和获取的数据接口层。
			- V即View视图,  视图层, 是指用户看到并与之交互的界面。比如由html元素组成的网页界面，或者软件的客户端界面。
			- C即controller控制器, 控制器层，它是 Model 和 View 之间的胶水或者说是中间人。

		- 模型(model)－视图(view)－控制器(controller)

			- 图示

			- 应用场景

				- 主要用于中大型项目的分层开发 

			- 运作流程

				- Model和View是完全隔离的，由C作为中间人来负责二者的交互
				- 同时三者是完全独立分开的
				- 这样可以保证M和V的可测试性和复用性，但是一般由于C都是为特别的应用场景下的M和V做中介者，所以很难复用。

	- 2. 好处

		- 耦合性低
		- 重用性高
		- 部署快，生命周期成本低
		- 可维护性高

	- 3. 存在的问题

		- 不适合小型，中等规模的应用程序
		- 视图与控制器间的过于紧密的连接并且降低了视图对模型数据的访问

- 2. MVVM

	- 1. 概念

		- Model --->每个页面的单独数据
View --->每个页面中的HTML结构
VM ---> 调度者

		-  Model---View---VM(ViewModel)

	- 2. 好处

		- 数据驱动

		- VM提供数据的双向绑定

## 二、新知识补充-1

### 0. 安装Vue调试工具

- Vue.js devtools

### 1. 事件修饰符

- .stop

	- 阻止冒泡

		- 从内到外

- .prevent

	- 阻止默认事件

		- <a href="http://www.jd.com" @click.prevent="buy">我想要买东西</a>

- .capture 

	- 添加事件侦听器时使用事件捕获模式

		- 从外到内

- .self

	- 只当事件在该元素本身（比如不是子元素）触发时触发回调

- .once

	- 事件只触发一次

- .stop 和 .self 的区别

	-  .stop 是真正意义上的阻止冒泡；
	- .self 只会阻止自己身上冒泡行为的触发，并不会真正阻止冒泡的行为。

### 2. class和style

- class

	-  1.  直接传递一个数组，注意： 这里的 class 需要使用  v-bind 做数据绑定;
	- 2.  在数组中使用表达式;
	- 3.  在数组中使用 对象来代替三元表达式，提高代码的可读性;
	-  4.  在为class使用v-bind绑定对象的时候，对象的属性是类名，由于对象的属性可带引号，也可不带引号，所以 这里我没写引号；  属性的值 是一个标识符
	- 代码演示

- style

	- 1.  直接在元素上通过 `:style` 的形式，书写样式对象
	- 2.  将样式对象，定义到 `data` 中，并直接引用到 `:style` 中
	- 3.  在 `:style` 中通过数组，引用多个 `data` 上的样式对象

### 3. v-for

- 1. 补充知识点

	-  in 后面我们放过  普通数组，对象数组，对象， 还可以放数字;
	- 注意：如果使用 v-for 迭代数字的话，前面的 count 值从 1 开始

- 2. ES6数组方法的使用

	- forEach

		- 伪数组转成真数组才能遍历
		- Array.prototype.slice.call(伪数组).forEach(()=>{});

	- some

		- 用于检测数组中的元素是否满足指定条件
		- 举例

			- 验证数组中是否有字段"itlike.com"

	- filter

		- 用于把Array的某些元素过滤掉，然后返回剩下的元素
		- 举例

			- let arr = [1, 2, 4, 5, 6, 9, 10, 15];
let r = arr.filter( (x) =>{
    return x % 2  !== 0;
 });
			- 结果: [1, 5, 9, 15]

- 3. ES6中字符串方法

	- String.prototype.includes('')

		- 如果包含该字符串, 返回true, 否则返回false

### 4. 过滤器

- 概念

	- Vue.js 允许我们自定义过滤器，可被用作一些常见的文本格式化， 比如日期，钱等。
	- 过滤器可以用在两个地方：mustache 插值和 v-bind 表达式。过滤器应该被添加在 JavaScript 表达式的尾部，由 | 指示分割；

- 用法

	- 全局过滤器
	- 私有过滤器

- 注意

	- 当有局部和全局两个名称相同的过滤器时候，会以就近原则进行调用，即：局部过滤器优先于全局过滤器被调用！

### 5. 自定义指令

- 自定义全局指令
- 自定义局部指令

### 6.Vue中组件的生命周期

- 图示

- 1. 什么是生命周期？

	- 从Vue实例创建、运行、到销毁期间，会伴随着触发各种各样的事件，这些事件，统称为生命周期。
	- 生命周期钩子 = 生命周期函数 = 生命周期事件

- 2. 生命周期中事件划分？

	- 创建期间的生命周期函数

		- beforeCreate

			- 实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性

		- created

			- 实例已经在内存中创建完毕，此时 data 和 methods 已经创建完毕，此时还没有开始编译模板

		- beforeMount

			- 此时已经完成了模板的编译，但是还没有挂载到页面中

		- mounted

			- 此时已经将编译好的模板，挂载到了页面指定的容器中显示

	- 运行期间的生命周期函数

		- beforeUpdate

			- 状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染DOM节点

		- updated

			- 实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！

	- 销毁期间的生命周期函数

		- beforeDestroy

			- 实例被销毁之前调用，在该函数中，实例仍然完全可用。

		- destroyed

			- Vue 实例销毁后调用，调用该函数后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

### 7. Vue中使用动画

- 网址

	- https://cn.vuejs.org/v2/guide/transitions.html

- 1. 使用动画的意义？

	- 动画能够提高用户的体验，帮助用户更好的理解页面中的功能；

- 2. transition

	- v-enter 【这是一个时间点】 是进入之前，元素的起始状态，此时还没有开始进入;
v-leave-to 【这是一个时间点】 是动画离开之后，离开的终止状态，此时，元素 动画已经结束了
	- v-enter-active 【入场动画的时间段】
v-leave-active 【离场动画的时间段】

- 3. animate.css在vue中的使用
- 4. 使用动画钩子函数
- 5. 案例实操

	- 操作1

		-  需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏
		-  使用 transition 元素，把 需要被动画控制的元素，包裹起来
		- 自定义两组样式，来控制 transition 内部的元素实现动画

	- 操作2

		- 需求: name属性使用

	- 操作3

		- 需求: 动画实现列表插入和删除
		- 技术点

			-      1. 在实现列表过渡的时候，如果需要过渡的元素，是通过 v-for 循环渲染出来的，不能使用 transition 包裹，需要使用 transitionGroup;
			-      2. 如果要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性;
			-      3. 给 transition-group 添加 appear 属性，实现页面刚展示出来时候，入场时候的效果;
			-      4. 通过 为 transition-group 元素，设置 tag 属性，指定 transition-group 渲染为指定的元素，如果不指定 tag 属性，默认，渲染为 span 标签

	- 操作4

		- 结合animate.css使用

### 8. is属性的使用

- Vue提供了 component ,来展示对应名称的组件
- component 是一个占位符, :is 属性,可以用来指定要展示的组件的名称

## 三、新知识补充-2

### 1. Vue-Cli

- 1. vue-cli是什么？

	- vue-cli是vue官方提供的脚手架工具，默认搭建好了一个项目的基本架子，我们在其基础上进行相应修改即可。
	- https://github.com/vuejs/vue-cli

		- 下载模板项目

- 2. 创建Vue项目

	- npm install -g vue-cli
vue init webpack jh_demo
cd jh_demo
npm install
npm run dev
	- 访问: http://localhost:8080/

- 3. 解读项目的目录结构
- 4. 代码规范检查工具（ESLint）

	- 1. 主要是对代码的书写格式进行检查，不影响项目的运行；

2. 其内部定义了很多规则，一旦项目中的某些代码违背了这些规则，ESLint就会做出非常有用的提示；

3. 官网：http://eslint.org/
	- 如果想去除某个检查

		- .eslintrc.js

			- 比如：去除空格检查

				- 'indent': 'off'

		- .eslintignore

			- 可以添加忽略哪些后缀的文件

				- 比如：*.vue, *.js

### 2. UI组件库-mint-ui

- 1. Vue常用的UI组件库

	- Mint UI

		- 地址

			- https://mint-ui.github.io/#!/zh-cn

		- 饿了么开源的基于vue的移动端UI组件库

	- Elment

		- 地址

			- http://element-cn.eleme.io/#/zh-CN

		- 饿了么开源的基于vue的PC端UI组件库

- 2. Mint UI

	- 1. 安装

		- npm install mint-ui -S

	- 2. 按需引入

		- 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
		- 安装

			- npm install babel-plugin-component -D

		- 修改.babelrc 

			- "plugins": ["transform-vue-jsx", "transform-runtime", ["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]

	- 3. Mint UI的分类

		- 标签组件
		- 非标签组件

	- 4. 使用Mint UI

		- 1. 引入要使用的组件

			- import { Button, Cell } from 'mint-ui'

		- 2. 全局注册组件

			- Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

		- 3. 子组件中使用

			- <mt-button type="danger">点我呀</mt-button>

### 3. Vuex

- 1. 什么是Vuex?

	- 1. 简介

		- 官方解释

			- Vuex是一个专为Vue.js应用程序开发的状态管理模式

		- 当项目比较庞大的时候，每个组件的状态比较多，为了方便管理，需要把组件中的状态抽取出来，放入Vuex中进行统一管理。

	- 2. 在线文档

		- https://github.com/vuejs/vuex

		- https://vuex.vuejs.org/zh/

	- 3. 整体作用

		- 对项目中多个组件的共享状态进行集中式的管理(读/写)

- 2. 为什么要使用VueX?

	- 解决多组件共享状态问题

		- 1. 多个视图依赖于同一个状态
		- 2. 多个不同的视图行为需要变更同一状态
		- 3. 以往解决方案

			- 方案一

				- 将所有数据以及操作数据的方法都定义在父组件
				- 将数据以及操作数据的方法传递给需要的各个子组件
				- 存在问题:

					- 项目一旦复杂, 将难以管理和维护

			- 方案二

				- 通知, 代理等形式
				- 存在问题:

					- 消耗性能
					- 容易发生内存泄露

		- 4. vuex就是解决此问题的终极方案

	- 图示

		- state，驱动应用的数据源；
		- view，以声明方式将 state 映射到视图；
		- actions，响应在 view 上的用户输入导致的状态变化。

- 3. Vuex状态管理

	- 图示

		- Backend API：后端接口；
Vue Components: 界面组件；

			- 操作步骤： 当组件中的状态发生改变，通过dispatch函数提交到Action，Actions再通过Commit函数提交到Mutations, 此时，状态发生改变都会实时的去渲染组件。

	- 画图分析结构

- 4. Vuex的核心概念？

	- State

		- 唯一的数据源

			- 我们需要把任何一个组件中需要抽取出来的变量放入到state中去

		- 单一的状态树

			- 只要把store注册到app.js中，所有组件都可以使用其中的状态
			- 举例：

				- const Counter = {
    template:  `<p>{{total}}</p>`,
    computed:  {
           total(){
                 return  this.$store.state.total 
           } 
    }
}

	- Getters

		- 概念

			- 通过Getters可以派生出一些新的状态

		- 举例

			- //  创建一个Vuex的实例
const  store = new Vuex.Store({
       state: {
            goods: [
                  {id: 1, name: '....',  show: true},
                  {id: 2, name: '....',  show: false}， 
                  .......
             ]     
       },
       getters: {
             showGoods: state => {
                    return state.goods.filter(good => good.show);  
             } 
       }    
});

	- Mutations

		- 概念

			- 更改Vuex的store中的状态的唯一方法时提交mutation

		- 举例：

			- const store = new Vuex.Store({
     state: {
         total: 1
      }，
      mutations: {
           add (state){
                // 更改状态
               state.total++;  
           } 
      }
});
			- 调用： store.commit('add')；

	- Actions

		- 概念

			- Action提交的是mutation，而不是直接变更状态
			- Action可以包含任何的异步操作, 但mutation必须是同步操作

		- 举例：

			- const store = new Vuex.Store({
     state: {
         total: 0
      }，
      mutations: {
           add (state){
                // 更改状态
               state.total++;  
           } 
      }，
      actions: {
           add(context){
                 context.commit('add');
           }
      }
});

	- Modules

		- 概念

			- 面对复杂的应用程序，当管理的状态比较多时， 我们需要将Vuex的store对象分割成多个模块(modules)

		- 举例：

			- const  moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}

const  moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}

const store = new Vuex.Store({
     modules: {
           a:  moduleA,
           b:  moduleB
     }
});

- 5. Vuex快速入门

	- 手工图示
- [![swcz6S.md.png](https://s3.ax1x.com/2021/01/15/swcz6S.md.png)](https://imgchr.com/i/swcz6S)
	
	- todoList

