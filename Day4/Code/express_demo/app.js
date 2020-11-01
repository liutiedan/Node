
var express = require('express')

// 3.创建你的服务器应用程序，也就是原来的http.createServer
var app = express()

// //当以/public/开头的时候，去./public/目录找对应的资源
// app.use('/public/', express.static('./public/'))

// //当省略第一个参数的时候，可以通过省略/public的方式来访问
// //127.0.0.1:3001/login.html(不用写/public了)
// app.use(express.static('./public/'))

//当服务器收到get请求 / 得时候，执行回调函数
app.get('/', function(req, res){
	res.send('hello express')
})

app.get('/about', function(req, res){
	//在express中可以通过req.query直接获得查询字符串
	console.log(req.query)
	res.send('hello About')
})


app.listen(3001, function(){
	console.log('App is running at port 3001')
})