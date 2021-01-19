// 1. 连接数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lk_pdd');

// 2. 创建用户集合
var userSchema = mongoose.Schema({
   // 用户名
    'name': {type: String},
   // 密码
    'pwd': {type: String},
   //  手机
    'phone': {type: String},
   // 最后操作时间
    'l_time': {type: Date, default: Date.now}
});

// 3. 输出文档(model)
var User = mongoose.model('user', userSchema);
module.exports = User;