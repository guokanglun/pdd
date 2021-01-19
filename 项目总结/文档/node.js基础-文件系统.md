# node.js基础-文件系统

## 0. 复习

### 1.Node.js是什么

- Node.js是用于开发服务器，做数据API, 设计路由.., 和前端的主要区别在于: 前端主要负责效果和交互

### 2. Node.js是追求性能极致的产物

- 单线程
- Non-blocking I/O
- Event Driven

### 3.Node.js和其它后端语言不同

- 1） 没有自己的语法，使用V8引擎，用的是JS。V8引擎解析JS的，效率非常高，并且V8中很多东西都是异步的。Node就是站在巨人肩膀上，把V8中的一些功能移植到了服务器上。
- 2） 没有web容器，就是安装配置完成之后，没有一个根目录。

### 4. 模块

- 在Node.js中，以模块为单位划分所有功能，并且提供了一个完整的模块加载机制，我们可以将应用程序划分为各个不同的部分。

## 1. Buffer(缓冲区)

### 为什么用Buffer？

- 在Node、ES6出现之前，前端工程师只需要进行一些简单的字符串或DOM操作就可以满足业务需要，所以对二进制数据是比较陌生。
- 但node出现以后，前端工程师面对的技术场景发生了变化，可以深入到网络传输、文件操作、图片处理等领域，而这些操作都与二进制数据紧密相关。
- Node里面的buffer，是一个二进制数据容器，数据结构类似与数组，专门用于Node中数据的存放

### Buffer的基本使用？

- 历史使用

	- const buf1 = new Buffer(10)；

		- 安全隐患: 分配到的内存可能还存储着旧数据，这样就存在安全隐患

- 新使用方式

	- Buffer提供了Buffer.from、Buffer.alloc、Buffer.allocUnsafe、Buffer.allocUnsafeSlow四个方法来申请内存

		- // 1. 将一个字符串转为buffer存储
// var str = "it666.com";
let str = "旋之华";
let buffer1 = Buffer.from(str);
console.log(buffer1); // <Buffer 69 74 36 36 36 2e 63 6f 6d>
console.log(buffer1.length);
console.log(str.length);

console.log(buffer1.toString());

			- Buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示

				- 00 - ff
				- 0 - 255
				- 00000000 - 11111111

					- 计算机 一个0 或一个1 称为1位（bit）
					- 8bit = 1Byte（字节）
1024Byte = 1KB
1024KB = 1MB
1024MB = 1GB
1024GB = 1TB
					- Buffer中的一个元素，占用内存的一个字节

		- // 2. Buffer.alloc(size) 创建一个指定大小的Buffer
// 注意：buffer的大小在初始化时就确定，不能动态改变
var buffer2 = Buffer.alloc(10);
buffer2[0] = 10;
buffer2[1] = 255;
buffer2[2] = 0xaf;
buffer2[10] = 12; // 超出不处理
// console.log(buffer2);
// console.log(buffer2[2]); // 输出都是以10进制输出
// console.log(buffer2[2].toString(16));

buffer2.forEach((item, index)=>{
    console.log(index + ":" + item);
});
		- // 3. Buffer.allocUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
let buffer3 = Buffer.allocUnsafe(10);
console.log(buffer3);

	- Buffer.from(str) 将一个字符串转换为buffer
Buffer.alloc(size) 创建一个指定大小的Buffer
Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据

### Buffer使用相关注意点

- Buffer的结构和数组很像，操作的方法也和数组类似
- Buffer中是以二进制的方式存储数据的
- Buffer是Node自带，不需要引入，直接使用即可

## 2. 文件系统（File System）

### 基本概念

- 在Node中，与文件系统的交互是非常重要的，服务器的本质就将本地的文件发送给远程的客户端
-  Node通过fs模块来和文件系统进行交互，该模块提供了一些标准文件访问API来打开、读取、写入文件，以及与其交互。
- 要使用fs模块，首先要从核心模块中加载：
const fs = require("fs");

### 使用特点

- fs模块中所有的操作都有两种形式可供选择同步和异步。
- 同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码。
- 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回。

### 文件操作

- 打开文件

	- fs.open(path, flags[, mode], callback)
fs.openSync(path, flags[, mode])

		- 
r 读取文件 ,  文件不存在则出现异常
r+ 读写文件 ,  文件不存在则出现异常
rs 在同步模式下打开文件用于读取
rs+ 在同步模式下打开文件用于读写
w 打开文件用于写操作 ,  如果不存在则创建，如果存在则截断
wx 打开文件用于写操作 ,  如果 存在则打开失败
w+ 打开文件用于读写 , 如果不存在则创建 , 如果存在则截断
wx+ 打开文件用于读写 ,  如果 存在则打开失败
a 打开文件用于追加 ,  如果不存在则创建
ax 打开文件用于追加 ,  如果路径存在则失败
a+ 打开文件进行读取和追加 ,  如果不存在则创建该文件
ax+ 打开文件进行读取和追加 , 如果路径存在则失败

- 关闭文件

	-  fs.close(fd, callback)
 fs.closeSync(fd)

- 写入文件操作

	- 写入文件

		- fs中提供了四种不同的方式将数据写入文件

			- 1. 简单文件写入
2. 同步文件写入
3. 异步文件写入
4. 流式文件写入

		- 1. 简单的文件写入

			- • fs.writeFile(file, data[, options], callback)
• fs.writeFileSync(file, data[, options])
			-  参数：
– file 文件路径
– data 被写入的内容，可以是String或Buffer
– options 对象，包含属性（encoding、mode、
flag）
– callback 回调函数

		- 2. 同步文件写入

			- • fs.writeSync(fd, buffer, offset, length[, position])
• fs.writeSync(fd, data[, position[, encoding]])
			- 参数
– fd 文件描述符，通过openSync()获取
– data 要写入的数据（String 或 Buffer）
– offset buffer写入的偏移量
– length 写入的长度
– position 写入的起始位置
– encoding 写入编码
			- 注意： 要完成同步写入文件，先需要通过openSync()打开文件来获取一个文件描述符，然后在通过writeSync()写入文件。

		- 3. 异步文件写入

			- • fs.write(fd, buffer, offset, length[, position], callback)
• fs.write(fd, data[, position[, encoding]], callback)
			- 参数：
– fd 文件描述符
– data 要写入的数据（String 或 Buffer）
– offset buffer写入的偏移量
– length 写入的长度
– position 写入的起始位置
– encoding 写入编码
			- 注意： 要使用异步写入文件，先需要通过open()打开文件，然后在回调函数中通过write()写入。

	- 同步文件写入

	- 异步文件写入

	- 简单文件写入

	- 流式文件写入

- 读取文件操作

	- fs中提供了四种不同的方式读取文件

		- 1. 简单文件读取
2. 同步文件读取
3. 异步文件读取
4. 流式文件读取

	- 简单文件读取

	- 流式文件读取

		-    流式文件读出：
   - 大文件
   - 多次把内容读入内存
   - 效率较高，安全

   注意：如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据

		- 简化版方式

## www.itlike.com

*XMind - Trial Version*