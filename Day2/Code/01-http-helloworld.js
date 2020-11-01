var http = require('http')
var fs = require('fs')
//1.创建Server
var server = http.createServer()

//2.监听Server的request请求事件，设置请求处理函数
//Apache服务器软件有一个默认www目录，所有存在www目录的资源都可以通过网址浏览127.0.0.1:80/
var wwwDir = 'D:\\Node\\Day2\\www'
server.on('request', function(req, res) {
	// console.log(req.url)
	var url = req.url
	if(url === '/'){
		fs.readFile(wwwDir + '/index.html', function(err, data){
			if(err){
				return res.end('404 Not Found')
			}
			res.end(data)
		})
	}else{
		fs.readFile(wwwDir + url +'', function(err, data){
			if(err){
				return res.end('404 Not Found')
			}
			res.end(data)
		})
	}
})

//3.绑定端口号，启动服务
server.listen(3001, function(){
	console.log('running...')
})
