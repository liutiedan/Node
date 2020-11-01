/* 
	1.安装		
		npm i -S express
 	2.引包
*/
var express = require('express')

// 3.创建你的服务器应用程序，也就是原来的http.createServer
var app = express()

//当服务器收到get请求 / 得时候，执行回调函数
app.get('/', function(req, res){
	res.send('hello express')
})

app.get('/about', function(req, res){
	//在express中可以通过req.query直接获得查询字符串
	console.log(req.query)
	res.send('hello about')
})

//公开指定目录，只要这样做了就可以直接通过/public/xx的方式访问public目录中的所有资源了
// app.use('/public/', express.static('./public/'))

//相当于server.listen
app.listen(3001, function(){
	console.log('app is running at port 3001')
})