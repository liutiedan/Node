/*
	根据不同的请求方法和请求路径设置具体的请求处理函数
*/

// let fs = require('fs');
let Student = require('./student1');

let express = require('express');

//1.创建一个路由容器
let router = express.Router();

//2.把路由都挂载到路由容器上去

//渲染学生列表页面
router.get('/', function(req, res){
	Student.find(function(err, students){
		if(err){
			return res.status(500).send('Server error');
		}
		res.render('index.html', {
			fruits: ['苹果', '香蕉', '梨'],
			students: students
		})
	})
})

//渲染添加学生页面
router.get('/students/new', function(req, res){
	res.render('new.html')
})


//处理添加学生
router.post('/students/new', function(req, res){
	/*
		1.获取表单数据
		2.处理，将数据保存到data.json用以持久化
		3.发送响应
	*/
	Student.save(req.body, function(err){
		if (err) {
	      return res.status(500).send('Server error.')
	    }
	    res.redirect('/')
	})
})

//渲染编辑学生页面
router.get('/students/edit', function(req, res){
	/*
		1.在客户端的列表页中处理链接问题
		2.获取要编辑的学生ID
		3.根据ID把学生信息查出来
		4.使用模板引擎渲染页面
	*/

	Student.findById(parseInt(req.query.id), function(err, student){
		console.log(req.query);
		if(err){
			return res.status(500).send('Server error');
		}
		res.render('edit.html', {
			student: student
		})
	})
})

//处理编辑学生
router.post('/students/edit', function(req, res){
	Student.updateById(req.body, function(err){
		if(err){
			return res.status(500).send('Server error');
		}
		res.redirect('/');
	})
})

//删除学生
router.get('/students/delete', function(req, res){
	Student.deleteById(req.query.id, function(err){
		if(err){
			return res.status(500).send('Server error');
		}
		res.redirect('/');
	})
})

module.exports = router