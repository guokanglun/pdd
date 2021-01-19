# Vue高级-Day2

## 1. 网络请求

### 方式1

- vue-resource 

	- 实现 get, post, jsonp请求
	- https://github.com/pagekit/vue-resource

### 方式2

- axios

	- 实现 get, post, jsonp请求
	- https://github.com/axios/axios

## 2. Vue-Resouce的使用

### 1. 引入

- 直接在页面中，通过`script`标签，引入 `vue-resource` 的脚本文件；
- 注意：引用的先后顺序是先引用 `Vue` 的脚本文件，再引用 `vue-resource` 的脚本文件；

### 2. 发送get请求

- this.$http.get('http://127.0.0.1:3000/api/getStuList').then(function (result) {
                     this.persons = result.body.message;
                });

### 3. 发送post请求

-  this.$http.post('http://127.0.0.1:3000/api/insertStuList', this.newStudent, {emulateJSON: true}).then(result => {
                    if(result.body.success_code == 200){ // 插入成功
                        this.getStudentList();
                    }else {
                        alert(result.body.message);
                    }
                });

### 4. 发送JSONP请求获取数据

-  使用JSONP

	- 前提

		- 由于浏览器的安全性限制，不允许AJAX访问 协议不同、域名不同、端口号不同的 数据接口，浏览器认为这种访问不安全；
		- 可以通过动态创建script标签的形式，把script标签的src属性，指向数据接口的地址，因为script标签不存在跨域限制，这种数据获取方式，称作JSONP。（JSONP只支持Get请求）

	- 实现方式

		- 1. 先在客户端定义一个回调方法，预定义对数据的操作；
		- 2. 再把这个回调方法的名称，通过URL传参的形式，提交到服务器的数据接口；
		- 3. 服务器数据接口准备好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行；
		- 4. 客户端拿到服务器返回的字符串之后，当作Script脚本去解析执行，这样就能够拿到JSONP的数据了。

## 3. Vue-Cli

### 1. vue-cli是什么？

- vue-cli是vue官方提供的脚手架工具，默认搭建好了一个项目的基本架子，我们在其基础上进行相应修改即可。
- https://github.com/vuejs/vue-cli

	- 下载模板项目

### 2. 创建Vue项目

- npm install -g vue-cli
vue init webpack jh_demo
cd jh_demo
npm install
npm run dev

### 3. 解读项目的目录结构

### 4. 代码规范检查工具（ESLint）

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

## 4. 项目打包和发布

### 1. 打包

- npm run build

### 2. 发布上线

- 本地服务器

	- npm install -g serve
serve dist
	- 访问

		- http://localhost:

- 线上(动态web)服务器

	- 1. 修改配置文件：webpack.prod.conf.js

		- output:{
      publicPath: '/xxx/'    // 最终要生成项目的名称
}

	- 2. 重新打包

		- npm run build

	- 3. 把dist文件夹名称修改为项目的名称，部署上线

		- 如果是Tomcat服务器，之间部署到webapps目录下

	- 4. 根据网址目录访问

## 5. Vuex

### 1. 什么是Vuex?

- 官方解释

	- Vuex是一个专为Vue.js应用程序开发的状态管理模式

- 当项目比较庞大的时候，每个组件的状态比较多，为了方便管理，需要把组件中的状态抽取出来，放入Vuex中进行统一管理。

### 2. 为什么要使用VueX?

- 官方解释

	- 当我们需要构建一个中大型的单页面应用程序是，Vuex可以更好的帮助我们在组件外部统一管理状态。

- 通过购物车案例举例

### 3. Vuex的核心概念？

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

### 4. Vuex状态管理

- 图示

	- Backend API：后端接口；
Vue Components: 界面组件；

		- 操作步骤： 当组件中的状态发生改变，通过dispatch函数提交到Action，Actions再通过Commit函数提交到Mutations, 此时，状态发生改变都会实时的去渲染组件。

### 5. Vuex快速入门

- 案例一
- 案例二
- 案例三
- 案例四

