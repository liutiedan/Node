const mongoose = require('mongoose');

const { Schema } = mongoose;

//1/连接数据库
mongoose.connect('mongodb://localhost:27017/demo2');

//2.设计集合结构（表结构）
//约束一下防止脏数据
const userSchema = new Schema({
	username : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	email : {
		type : String,
		// required : false
	}
});

//3.将文档结构发布为模型
//	第一个参数：掺入一个大写名词单数字符串用来表示数据库名称，mongoose会自动生成 小写复数 的结合名称
//	即User变为users
//  返回值：模型构造函数
const User = mongoose.model('User',userSchema);

//4. 当我们有了模型构造函数后，就可以使用这个构造函数对User中的数据增删改查了
// const admin = new User({
// 	username: 'tiedan',
// 	password: '123456',
// 	email: 'tiedan@163.com'
// })

// admin.save(function(err,res){
// 	if(err){
// 		console.log('保存失败')
// 	}else{
// 		console.log('保存成功')
// 		console.log(res)
// 	}
// })

// #region /新增数据
// **********************
// var admin = new User({
//   username: 'zs',
//   password: '123456',
//   email: 'admin@admin.com'
// })

// admin.save(function (err, ret) {
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功')
//     console.log(ret)
//   }
// })
// **********************
// #endregion /新增数据
// **********************




// **********************
// #region /查询数据
// **********************
User.find()
	.then(function (data) {
    	console.log(data)
  	})


//得到的是一个数组
// User.find({
//   username: 'tiedan'
// }, function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })

//只找符合的第一个，拿得到的就是一个对象
// User.findOne({
//   username: 'tiedan'
// }, function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })
// **********************
// #endregion /查询数据
// **********************



// **********************
// #region /删除数据
// **********************
// User.remove({
//   username: 'zs'
// }, function (err, ret) {
//   if (err) {
//     console.log('删除失败')
//   } else {
//     console.log('删除成功')
//     console.log(ret)
//   }
// })
// **********************
// #endregion /删除数据
// **********************


// **********************
// #region /更新数据
// **********************
// User.findByIdAndUpdate('5a001b23d219eb00c8581184', {
//   password: '123'
// }, function (err, ret) {
//   if (err) {
//     console.log('更新失败')
//   } else {
//     console.log('更新成功')
//   }
// })
// **********************
// #endregion /更新数据
// **********************