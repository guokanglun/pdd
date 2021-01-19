# Node进阶-Mongoose

## 1. 需求分析

### 为什么要用?

- 之前我们都是通过命令行或者shell来完成对数据库的各种操作的，但在开发中大部分时候我们都需要通过程序来完成对数据库的
操作。
- 而Mongoose就是一个让我们可以通过Node来操作MongoDB的模块。

### mongoose是什么?

- http://mongoosejs.com/

- Mongoose是一个对象文档模型（ODM）库，它对Node原生的MongoDB模块进行了进一步的优化封装，并提供了更多的功能。

### mongoose的优势?

- • 可以为文档创建一个模式结构（Schema）
• 可以对模型中的对象/文档进行验证
• 数据可以通过类型转换转换为对象模型
• 可以使用中间件来应用业务逻辑挂钩
• 比Node原生的MongoDB驱动更容易

## 2. mongoose的基本使用

### 相关概念

- mongoose中提供了几个新的对象
-  Schema(模式对象)

	- Schema对象定义约束了数据库中的文档结构

- Model

	- Model对象作为集合中的所有文档的表示，相当于MongoDB数据库中的集合collection

- Document

	-  Document表示集合中的具体文档

### 使用步骤

- 1.下载安装Mongoose

	- npm i mongoose --save

- 2.在项目中引入mongoose

	- let mongoose = require("mongoose");

- 3.连接MongoDB数据库

	- mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名');
	-  如果端口号是默认端口号（27017） 则可以省略不写

- 4. 监听MongoDB数据库的连接状态

	- 在mongoose对象中，有一个属性叫做connection，该对象表示的就是数据库连接, 通过监视该对象的状态，可以来监听数据库的连接与断开
	- mongoose.connection.once("open",function(){});
	- mongoose.connection.once("close",function(){});

- 案例实操

	- // 1. 在项目中引入mongoose
let mongoose = require('mongoose');
// 2. 连接MongoDB数据库
mongoose.connect('mongodb://localhost/node_mongoose');
// 3. 监听MongoDB数据库的连接状态
let db = mongoose.connection;
// 连接失败
db.on('error', ()=>{
    console.log("连接失败");
});
// 连接成功
db.once('open', () => {
    console.log("连接成功");
});
// 监听数据库断开连接
db.once('close', () => {
    console.log("数据库断开连接");
});
mongoose.disconnect();

- 步骤详解

	- 1.下载安装Mongoose
	- 2.在项目中引入mongoose
	- 3.连接MongoDB数据库
	- 4. 监听MongoDB数据库的连接状态

## 3. mongoose对文档进行增删改查

### 增

### 查

- Model.find()
Model.findById()
Model.findOne()
- 案例

### 改

### 删

## 4. mongoose中的文档方法

## www.itlike.com

*XMind - Trial Version*