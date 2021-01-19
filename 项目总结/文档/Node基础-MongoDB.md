# Node基础-MongoDB

## 1. 数据库（Database）

### 基本概念

- 数据库就是按照一定的数据结构来组织、存储和管理数据的仓库。
- 我们写的程序都是在内存中运行的，一旦程序运行结束或者计算机断电，程序运行中的数据都会全部丢失；所以我们就需要将一些程序运行的数据持久化到硬盘之中，以确保数据的安全性。
- 数据库则是大批量数据持久化的普遍选择。

	- 数据库
	- 文件

- 思考：为什么普遍都采用数据库存储数据？

	- 1.数据库是有结构的，数据与数据之间可以建立各种关系，类似网状拓扑图。
	- 2. 数据库能够提供各种接口，让数据的处理（增删改查操作）变得快捷简单。
	- 3. 给各种语言（PHP、jsp、.net.......）提供了完善的接口。

### 数据库分类

- RDBMS(关系型数据库)

	- MySQL，SQL Server，Oracle，DB2 ……
	- 通过一张张表来建立关联
	- 基本上都使用SQL语言来管理数据库

		- structure query language
		- 使用Demo

			- SELECT * FROM student WHERE name = '旋之华';

- NoSQL(非关系型数据库)

	- Not Only SQL

		- 没有行、列的概念；用JSON来存储数据。
集合就相当于“表”，文档就相当于“行”。
		- 标准化和非标准化的摩擦
标准化限制创新，非标准化不能统一

	- 特征

		- 键值(Key-Value)存储数据库
		- 列存储数据库
		- 文档型数据库
		- 图形(Graph)数据库

	- MongoDB、CouchDB、HBase、Redis、......

### 区分

- 关系型数据库比较结构化，操作不是很灵活；非关系型数据库操作灵活，但不适合大型数据存储，比较适合微架构……
两者是相互辅助关系！

	- 1、数据模型比较简单；
	- 2、需要灵活性更强的后台系统；
	- 3、对数据库性能要求较高；
	- 4、不需要高度的数据一致性。

## 2. MongoDB

### 简介

- MongoDB是为快速开发互联网Web应用而设计的数据库系统。
- MongoDB的设计目标是极简、灵活，经常在Web应用栈的业务层被运用。
- MongoDB的数据模型是面向文档的，类似于JSON的结构，MongoDB这个数据库中存的是各种各样的BSON

### 安装

- 下载MongoDB

	-  https://www.mongodb.org/dl/win32/
	-  MongoDB的版本偶数版本为稳定版，奇数版本为开发版
	- MongoDB对于32位系统支持不佳，所以3.2版本以后没有再对32位系统的支持

- 步骤

	- 1. 安装MongoDB的数据库服务器
	- 2. 配置环境变量

		- C:\Program Files\MongoDB\Server\3.4\bin
	- 3. 在c盘根目录创建一个文件夹data，在data文件夹中创建一个文件夹db
	- 4. 打开命令行

		- 输入 mongod  

			- 启动MongoDB服务器

		- 32位系统第一次启动

			- 输入  mongod --storageEngine=mmapv1

	- 5. 指定端口和路径

		- 在控制台启动MongoDB
		- mongod --dbpath 路径 --port 端口号
		- mongod --dbpath C:\Users\dxuan\Desktop\data\db --port 123

	- 6. 将MongoDB设置为系统服务

		- 可以自动在后台启动，不需要每次都启动
		- 1. mkdir c:\data\log
		- 2. 创建配置文件

			- mongod.cfg
			- 放在C:\Program Files\MongoDB\Server\3.4下

		- 3. 以管理员的身份打开命令行

			- sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\3.4\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"
		- 4. 右击 任务栏 ---> 任务管理器  ---> 服务 ---> 启动MongoDB服务
		- 5. 如果服务启动失败， 证明上面的操作有误

			- 控制台输入： sc delete MongoDB 删除之前配置的服务
			- 重新再来

### 使用

- mongoDB基本组成

	- 数据库（database）

		- 数据库是一个仓库，在仓库中可以存放集合。

	-  集合（collection）

		- 集合类似于数组，在集合中可以存放文档。

	- 文档（document）

		- 文档数据库中的最小单位，我们存储和操作的内容都是文档。

- mongoDB的基本指令

	- show dbs

		- 显示当前所有的数据库

	- use 数据库名

		- 进入到指定数据库中

	- db

		- 显示当前所在的数据库

	- show collections

		- 显示数据库中的所有集合

- 命令行进行CRUD

	- 1. 往数据库中插入文档

		- db.<collection >.insert(doc)
		- 举例子：向school数据库中的学生集合student中插入一个新的学生对象{id: "001", name: "Jack", age: 18, sex: "男"}

	- 2. 查询当前集合中所有的文档

		- db.<collection>.find();

			- 非常麻烦，用可视化工具

- 安装可视化操作软件

	- mongodbmanagerpro_inst.exe

- MongoDB进行CRUD

	- 插入

	- 查询

	- 修改

	- 删除

### 熟悉使用

- //1.创建并进入it_666数据库
//2.向数据库的colleges集合中插入六个文档(Html5, Java, Python, 区块链, K12, <PHP, "世界上最好的编程语言">)  
//3.查询colleges集合中的文档
//4.向数据库的colleges集合中插入一个文档(Golang)    
//5.统计数据库colleges集合中的文档数量
//6.查询数据库colleges集合中name为Html5的文档
//7.向数据库colleges集合中的name为Html5的文档，添加一个intro属性，属性值为"打通全栈任督二脉!"
//8.使用{name:"大数据"} 替换 name 为 "K12"的文档   
//9.删除name为PHP的文档的intro属性
//10.向name为Html5的文档中，添加一个classes:{base:["h5+c3","js","jQuery", "abc"] , core:["三大框架","node.js"]}
//11.查询有核心课程为 三大框架 的文档
//12.向name为Html5的文档中，添加一个新的核心课程 "微信小程序"
//13.向name为Html5的文档中，删除基础课程"abc"
//14.删除colleges集合
- //15.向集合中中插入10000个文档 
//16.查询demos中counter为666的文档
//17.查询demos中counter小于666的文档
//18.查询demos中counter大于666的文档
//19.查询demos中counter大于66小于666的文档
//20.查看demos集合中的前10条数据
//21.查看demos集合中的第11条到20条数据
//22.查看demos集合中的第21条到30条数据
- //23. 创建company数据库, 将it666和section集合导入到数据库中
//24.查询HTML5学院的所有老师
//25.查询Java学院的所有员工
//26.查询工资大于20000的员工
//27.查询工资在10000-20000之间的员工
//28.查询工资小于10000或大于25000的员工
//29.为所有薪资低于10000的员工增加工资1000元

## 3. 文档间关系

### 一对一（one to one）

- 举例:  身份证 <-> 人
          老公  <-> 老婆
- 在MongoDB，可以通过内嵌文档的形式来体现出一对一的关系

### 一对多（one to many）/多对一(many to one)

- 举例:  父母 <-> 孩子
          用户 <-> 物品
          微博  <-> 评论
          .......
- 可以通过多文档关联

### 多对多(many to many)

- 举例: 老师 <-> 学生
         品类  <-> 物种
- 可以通过多文档关联

### 实操

## 4. 排序和索引

### 01-排序

- 查询文档时, 默认情况是按照_id的值进行排列(升序)
- sort()可以用来指定文档的排序规则, sort()内部需要传递一个对象来指定文档的排序规则, 其中1表示升序, -1表示降序
- limit skip sort的顺序可以任意改变, 运行时会自动调整
- 案例

	- db.section.find({}).sort({wages: -1, cno:-1});

### 02-索引

- 在部分需求中, 有时候我们只需要一个文档中的部分数据, 这时候就得通过映射
- 在查询时, 可以在第二个参数来设置查询的结果投影
- 案例

	- db.section.find({}, {name: 1, _id: 0, wages: 1, bonus: 1});

## 5.中间层封装

### 1.什么是DAO?

- DAO(Data Access Object)是一个数据访问接口，数据访问：顾名思义就是与数据库打交道。夹在业务逻辑与数据库资源中间。

## www.itlike.com

*XMind - Trial Version*