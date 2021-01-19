# Node进阶-常用模块

## 1. 前言

### 写一个运行在网页上的Node页面

- 写代码,运行,处于挂起状态
- 修改后要断开, 重新运行, 刷新

### Node.js没有web容器

- 没有根目录, 不能像PHP, JavaWeb通过切换目录结构切换页面;  所有的页面资源都得通过路径配置

- 在Node中, 采用fs模块读入文件, 并手动配置路由
- 演示1

- 演示2

	- 加载图片,css等静态资源

### Node.js擅长于顶层路由设计,  url与物理文件并不是一一对应的

## 2. HTTP模块

### 1. 简介

- 要使用 HTTP 服务器与客户端，需要 require('http')。

### 2. 常用方法

- http.createServer([requestListener])

	- 返回一个新建的 http.Server 实例
	- requestListener 是一个函数，会被自动添加到 'request' 事件

- response.end([data][, encoding][, callback])

	- 该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。 每次响应都必须调用 response.end() 方法。
	- 如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)。
	- 如果指定了 callback，则当响应流结束时被调用。

- server.listen()

	- 开启HTTP服务器监听连接

- response.writeHead(statusCode[, statusMessage][, headers])

	- 发送一个响应头给请求。 状态码是一个三位数的 HTTP 状态码，如 404。 最后一个参数 headers 是响应头。 第二个参数 statusMessage 是可选的状态描述。

### 3. 中间件

- 中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。
- 中间件的功能

	- 执行任何代码
	- 修改请求和响应对象
	- 终结请求-响应循环
	- 调用堆栈中的下一个中间件

### 示例

## 3. URL模块

### 1. 简介

- 在开发过程中, 我们需要把一个url地址中的某一部分获取到

	- 正则表达式
	- url 模块提供了一些实用函数，用于 URL 处理与解析。

- const url = require('url');
### 2. 具体使用

- url.parse() 可以将一个完整的URL地址, 分为很多部分

## www.itlike.com

*XMind - Trial Version*