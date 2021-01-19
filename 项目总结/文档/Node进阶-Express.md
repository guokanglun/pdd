# Node进阶-Express

## 1. 前言

### 1. express是什么?

- Express.js 框架是目前最流行的node.js后端框架之一,  相当于jQuery和js之间的关系;
- Express 不对 Node.js 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 应用所需的基本功能;
- 功能类似的后端框架

	- Koa.js, egg.js, hapi.js

### 2. 安装express

- 1. 进入应用目录
- 2. npm init 命令为你的应用创建一个 package.json 文件
- 3. 安装 Express 并将其保存到依赖列表中

	- npm install express --save

- 4. 如果只是临时安装 Express，不想将它添加到依赖列表中，只需略去 --save 参数即可

	- npm install express

### 3. Express 应用生成器

- 通过应用生成器工具 express 可以快速创建一个应用的骨架。
- 1. 安装

	- npm install express-generator -g

- 2. 常用操作

	- express -h

		- -h 选项可以列出所有可用的命令行选项

	- 安装所有依赖包

		- npm install

- 3. 设置视图模板

	- express --view=ejs demo1

- 4. 启动应用

	- MacOS 或 Linux 平台

		- DEBUG=myapp npm start

	- Windows 平台

		- set DEBUG=myapp & npm start

	- 在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了

- 5.通过 Express 应用生成器创建的应用一般都有如下目录结构

## 2. Express小案例

### 1. 使用bootstrap搭建界面

### 2. socket.io

- socket.io 是什么?

	- Socket.io 将 Websocket 和轮询（ Polling ）机制以及其它的实时通信方式封装成了通用的接口，并且在服务端实现了这些实时机制的相应代码。
	- H5 的新技术 Websocket 仅仅是 Socket.io 实现实时通信的一个子集。

- 如何使用socket.io?

	- 安装

		- npm install socket.io --save
		- 进入 package.json  所在的目录下, 运行上面命令

	- 引入

		- // 引入包
let  socketPackage = require('socket.io'); 
// 针对 http server  生成 socket.IO  实例对象
let  io = socketPackage(server); 
		- 使用 socket.IO  的时候，需要生成一个 实例对象;
生成这个实例对象的依赖原生 node 已经建立好的 httpServer  对象

- 常用API?

	- 服务器端

		- 监听连接

			- io.on('connection',function(socket));
			- 当有客户端向本服务器建立连接的时候， ‘connection’ 事件就被激发。对应的回调函数就会执行。回调函数的参数 socket  就是这个客户端与服务器的 连接对象

		- 给所有客户端广播消息

			- io.sockets.emit('String',data);
			- 服务器主动向客户端发送消息， 消息的事件名为 myEvnetLabel ， 消息的具体内容为 data

		- 给指定的客户端广播消息

			- io.sockets.socket(socketid).emit('String', data);

		- 监听客户端消息

			- socket.on(‘myEvnetLabel’,function(data){});
			- 当某个客户端向服务器发送消息的时候，服务器监听这个消息，并将其回调函数执行

	- 浏览器端

		- 开启连接

			- let url = 'http://localhost:3000';
let socket = io.connect(url);

		- 监听服务器的消息

			- socket.on('myEvnetLabel',function(data){});
			- 当服务器有消息到达的时候，回调函数会被激发

		- 向服务器发送消息

			- socket.emit(‘myEvnetLabel’, data);
			- 客户端主动向服务器发送消息， 消息的事件名为 myEvnetLabel ， 消息的具体内容为 data

- 客户端socket.on()监听的事件

	- connect：连接成功
connecting：正在连接
disconnect：断开连接
connect_failed：连接失败
error：错误发生，并且无法被其他事件类型所处理
message：同服务器端message事件
anything：同服务器端anything事件
reconnect_failed：重连失败
reconnect：成功重连
reconnecting：正在重连
	- 当第一次连接时，事件触发顺序为：connecting->connect；当失去连接时，事件触发顺序为：disconnect->reconnecting（可能进行多次）->connecting->reconnect->connect。

## www.itlike.com

*XMind - Trial Version*