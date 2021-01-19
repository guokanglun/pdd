# node.js基础-磨刀不误砍柴工

## 1. 命令行窗口

### 简介

- 是在图形用户界面得到普及之前使用最为广泛的用户界面，它通常不支持鼠标，用户通过键盘输入指令，计算机接收到指令后，予以执行。也有人称之为字符用户界面（CUI）。
- 终端, CMD窗口, shell...

### 常用命令讲解

- dir

	- 列出当前目录下面所有的文件

- cd 目录名

	- 进入到指定的目录
	- . 当前目录,  .. 进入上级目录

		- cd . 当前目录, cd .. 上级目录

- md 目录名

	- 创建文件夹

- rd 目录名

	- 删除文件夹

- cd.>文件名.后缀名

	- 创建文件
	- cd.>a.txt

- cls

	- 清屏

- exit	

	- 退出命令行

## 2. 进程和线程

### 进程

- 概念

	- 系统进行资源分配和调度的基本单位，是操作系统结构的基础;
	- 我们写的代码和程序都是放在进程里面的, 相当于工厂中的车间;
	- 进程为程序的运行提供了必备的环境!
	- 右击 任务栏 -->任务管理器  --> 进程

### 线程

- 概念

	- 计算机中的最小计算单位, 负责执行进程中的程序
	- 相当于车间中的操作工人

- 单线程

	- js是单线程
	- 时间片分割

- 多线程

	- 根据任务决定开启几条线程

- Node服务器

	- 单线程, 但很健壮, 后台拥有一个I/O线程池进行调度
	- 分布式服务器部署

## 3. 安装node.js

### 官网下载

### 安装过程直接下一步

### 安装完成后， 会自动配置好环境变量，可以在任何一个目录当中访问node命令

### 在控制台通过node -v 查看node 版本

## 4. 第一个程序Hello World

### 1.在指定的目录当中创建一个.js的文件，注意不能使用中文命名

### 2. 运行方式

- 外部运行
- WebStorm内部运行

	- 右击运行
	- 终端运行
	- 报错: Program path not specified

		- 出现这个错误是由于没有设置Node.js路径引起的
		- 设置对应的路径

			- 设置完成后重启

- WebStorm代码提示

	- 引入Node源代码的Lib库
	- 引入node_modules库

## 5.Node开发需要模块化

### 概念

- ES6之前

	- ECMAScript存在以下几个问题

		- 没有模块系统
		- 官方标准库少/标准接口少
		- 缺乏包管理系统

- 模块化

	- 如果程序设计的规模达到了一定程度，则必须对其进行模块化

		- 前端没多大必要, 所以不太需要
		- 服务器端开发, 没有模块化开发思想就玩不转了

	- 模块化可以有多种形式，但都提供了能够将代码分割为多个源文件的机制。

		- Common.js

- CommonJS规范

	- CommonJS规范的提出，主要是为了弥补JavaScript没有模块化标准的缺陷
	- CommonJS规范为JS希望JS能够在任何地方运行

		- 这是一个美好的愿景

	- CommonJS对模块的定义

		- 模块引用

			- require("路径");

		- 模块定义
		- 模块标识

- 总结

	- 1. 从文件角度看, 每个JS文件就是一个模块; 从结构看, 多个JS文件之间可以相互require, 共同实现了一个功能, 这整体上也是一个模块
	- 2. 在Node.js中, 一个模块中定义的变量, 函数等, 都只能在这个文件内部有效; 当需要从此JS文件外部引用这些变量, 函数时, 必须使用exports进行暴露, 使用者通过require引用

### 实践1

- 1. 在Node中，一个js文件就是一个模块
- 2. 在Node中，通过require()函数来引入外部的模块

	- 引入外部模块要加上 . 或者 ..

- 3. 在Node中，每一个js文件中的js代码都是独立运行在一个小闭包中, 而不是全局作用域，所以一个模块的中的变量和函数在其他模块中无法访问

	- 目的: 全局变量私有化, 避免全局污染

- 4. 暴露模块中的变量和函数

	- export
	- 只需要将需要暴露给外部的变量或方法设置为exports的属性即可

- 5. 练习

	- 封装一个myFunc

		- 求和
		- 求平均数

### 实践2

- 模块标识

	- 当我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块

		- 比如: let myFunc = require("./js/myFunc");

	- 分类

		- 内建模块

			- 底层由C++编写

		- 文件模块

			- 由用户自己创建的模块
			- 标识

				- 文件的路径（绝对路径，相对路径）

		- 核心模块

			- 由node引擎提供的模块
			- 由node_modules提供的模块
			- 标识

				- 模块的名字

					- http
					- fs
					- global
					- ...

		- ...

- 思考: export和require怎么来的?

	- 错误答案: 全局变量

		- 1. window不是Node中的全局对象
		- 2. Node中有一个全局对象global, 作用和window类似

	-  正确答案: 函数参数

		-  函数的标识: arguments

			- 获取函数的所有实参

		- 获取函数自身 arguments.callee

			- 返回函数本身

- node文件组成剖析

	- 1. 当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码   function (exports, require, module, __filename, __dirname) {
	- 2.  在代码的最底部，添加  }
	- 3. 所以模块中的代码都是包装在一个函数中执行的，并且在函数执行的同时传递进了5个实参

		- exports:    该对象用来将函数内部的局部变量或局部函数暴露到外部
		- require:   用来引入外部的模块
		- module:   代表的是当前模块本身, exports就是module的属性;  我们既可以使用 exports 导出，也可以使用module.exports导出
		- __filename:   当前模块的完整路径
		- __dirname:    当前模块所在文件夹的完整路径

## 6. exports 和 module.exports的区别

### 1. 值类型和引用类型

### 2. 两者区别

- exports只能使用.语法来向外暴露内部变量

	- exports.xxx = xxx;

- module.exports既可以通过.语法，也可以直接赋值一个对象

	- module.exports.xxx = yyy;
module.exports = {xxx: yyy};

## 7. 包和包管理器

### 包(package)

- 概念

	- CommonJS的包规范允许我们将一组相关的模块组合到一起，形成一组完整的工具, 这组工具就叫做包。

- 组成

	- 包结构

		- 用于组织包中的各种文件
		- 实际上就是一个压缩文件，解压以后还原为目录

			-  package.json  描述文件
			- bin  可执行二进制文件
			-  lib  js代码
			- doc 文档
			- test 单元测试

	- 包描述文件 package.json

		- 描述包的相关信息，以供外部读取分析
		- 它是一个JSON格式的文件 – package.json, 位于包的根目录下

			- name、description、version、keywords、
maintainers、contributors、bugs、
licenses、repositories、dependencies、
homepage、os、cpu、engine、builtin、
directories、implements、scripts、author、
bin、main、devDependencies

- 注意事项

	- package.json文件中, 不能加入任何注释

### 包管理器(NPM)

- 概念

	- Node Package Manager

		- 相当于360软件管家

	- 对于Node而言，NPM帮助其完成了第三方模块的发布、安装和依赖等。借助NPM，Node与第三方模块之间形成了很好的一个生态系统。
	- 课外了解

		- Yarn 

			- Yarn 是 Facebook, Google, Exponent 和 Tilde 开发的一款新的 JavaScript 包管理工具。
			- 它的目的是解决这些团队使用 npm 面临的少数问题

				- 安装的时候无法保证速度/一致性
				- 安全问题，因为 npm 安装时允许运行代码

- 常用命令

	- npm –v 

		- 查看版本

	- npm version

		- 查看所有模块的版本

	- npm search  包名 / 部分包名 

		- 搜索包

	- npm init

		- 初始化package.json文件

	- npm install / i  包名

		- 安装包

			- 在外部使用
			- 在webStorm中使用

	- npm remove / r  包名

		- 删除包

	- npm install / i  包名  --save

		- 安装包并添加到依赖中

	- npm install

		- 根据package.json下载当前项目所依赖的包

	- npm install 包名 -g

		- 全局安装包,  用于一些编译根据, 比如: gulp,  webpack等

- 使用注意

	- 如果在页面中引入node_modules中某个模块, 优先从当前目录引入,  如果没有,  则往上级查找,  直到根目录

### CNPM使用

- 出现意义

	- 因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，也有可能被墙,   如果npm的服务器在中国就好了，所以马云的淘宝团队干了这事。
	- 淘宝镜像官网：“这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。” 
- 使用方式

	- https://npm.taobao.org/

	- npm install -g cnpm --registry=https://registry.npm.taobao.org

- 对比使用方式

## www.itlike.com

*XMind - Trial Version*