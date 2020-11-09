var http = require('http');
var fs = require('fs');
var template = require('art-template');

//1.创建Server
var server = http.createServer();

//2.监听server的request请求事件，设置请求处理函数
//Apache服务器有一个默认www目录，所有存在www目录的资源都可以通过127.0.0.1:80/浏览
var wwwDir = 'E:/Node/Code/Node/Day2/www';

server.on('request', function(req, res){
	// var url = req.url;
	
	fs.readFile('./template-apache.html', function(err, data){
		if(err){
			return res.end('请求文件失败')
		}

		fs.readdir(wwwDir, function(err, files){
			if(err){
				return res.end('请求目录失败')
			}

			var htmlStr = template.render(data.toString(), {
				title: '哈哈',
				files: files
			})
			res.end(htmlStr);
		})
	})
})

//3.绑定端口号，启动服务
server.listen(3001, function(){
	console.log('running...')
})
