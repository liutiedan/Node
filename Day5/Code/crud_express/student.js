const mongoose = require('mongoose');

const { Schema } = mongoose;

//1/连接数据库
mongoose.connect('mongodb://localhost:27017/itcast', {useNewUrlParser: true, useUnifiedTopology: true});

//2.设计集合结构（表结构）
//约束一下防止脏数据
const studentSchema = new Schema({
	name : {
		type : String,
		required : true
	},
	gender : {
		type : Number,
		enum : [0, 1],
		default : 0
	},
	age : {
		type : Number
	},
	hobbies : {
		type : String,
		// required : false
	}
});

//3.将文档结构发布为模型
//	第一个参数：掺入一个大写名词单数字符串用来表示数据库名称，mongoose会自动生成 小写复数 的结合名称
//	即User变为users
//  返回值：模型构造函数
module.exports = mongoose.model('Student',studentSchema);


// User.findByIdAndUpdate('5a001b23d219eb00c8581184', {
//   password: '123'
// }, function (err, ret) {
//   if (err) {
//     console.log('更新失败')
//   } else {
//     console.log('更新成功')
//   }
// })
