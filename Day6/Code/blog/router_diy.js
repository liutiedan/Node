//注册、登录、退出
//服务端
let express = require('express');
let User = require('./models/user');
var md5 = require('blueimp-md5')


let router = express.Router();

router.get('/', function(req, res){
	console.log(req.session.user);
	res.render('index.html', {
		user: req.session.user
	});
})

router.get('/register', function(req, res){
	res.render('register.html');
})


router.post('/register', function(req, res){
	// res.render('register.htm l');
	/*
		1.获取表单提交数据
		2.操作数据库(使用mongoose)
		3.发送响应
	*/
	console.log(req.body);
	let body = req.body;
	User.findOne({
		$or: [
			{email: body.email},
			{nickname: body.nickname}
		]
	}, function(err, data){
		if(err){
			// return res.status(500).send('Server error');
			return res.status(500).json({
				err_code: 500,
				message: 'Server error' 
			});
		}
		// console.log(data);
		if(data){
			console.log('重复了')
			// return res.status(200).send('email or nickname already exists')
			// return res.status(200).send(JSON.stringify({"success":true}))
			//ajax交互页面不会刷新
			return res.status(200).json({
				err_code: 1,
				message: 'email or nickname already exists'
			})
		}

		//对密码进行md5重复加密
		body.password = md5(md5(body.password));

		new User(body).save(function(err, user){
			if(err){
				return res.status(500).json({
					err_code: 500,
					message: 'Server error'
				});
			}

			//注册成功，使用session记录用户的登录状态
			req.session.user = user;

			// res.status(200).send('ok');//此时页面不显示，因为客户端要求的是json格式，需要'{"success":true}'
			//或者用express提供的响应方法，自动将对象转为字符串在发送给浏览器
			return res.status(200).json({
				err_code: 0,
				message: 'ok'
			})
		})
	})
})

router.get('/login', function(req, res){
	res.render('login.html');
})

router.post('/login', function(req, res){
	// res.render('login.html');

	var body = req.body;
	User.findOne({
		email: body.email,
		password: md5(md5(body.password))
	}, function(err, user){
		if(err){
			return res.status(500).json({
				err_code: 500,
				message: err.message 
			});
		}

		if(!user){
			return res.status(200).json({
				err_code: 1,
				message: 'Email or password invalid'
			})
		}

		//用户存在，登陆成功，通过session记录登录状态
		req.session.user = user;

		res.status(200).json({
			err_code: 0,
			message: 'ok'
		})
	})
})

router.get('/logout', function(req, res){
	//清除登录状态，重定向到登录页
	req.session.user = null;
	res.redirect('/login');
})



module.exports = router;