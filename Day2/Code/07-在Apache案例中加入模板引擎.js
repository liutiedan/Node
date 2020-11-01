var http = require('http')
var fs = require('fs')
var template = require('art-template')
//1.创建Server
var server = http.createServer()

//2.监听Server的request请求事件，设置请求处理函数
//Apache服务器软件有一个默认www目录，所有存在www目录的资源都可以通过网址浏览127.0.0.1:80/
var wwwDir = 'D:\\Node\\Day2\\www'
server.on('request', function(req, res) {
	// console.log(req.url)
	var url = req.url
	fs.readFile('./template-apache.html', function(err, data){
		if(err){
			return res.end('404 Not Found')
		}
		//1.如何得到wwwDir目录列表中的文件名和目录名
		//	fs.readdir
		//2.如何将得到的文件名和目录名替换到template.html中
		//	2.1在template中需要替换的位置预留一个特殊标记
		//	2.2根据files生成HTML需要的内容
		//	模板引擎

		fs.readdir(wwwDir, function(err, files){
			if(err){
				return res.end('找不到www目录')
			}
			var htmlStr = template.render(data.toString(), {
		        title: '哈哈',
		        files: files
		    })
		    res.end(htmlStr)
		})
		// res.end(data)
	})
})

//3.绑定端口号，启动服务
server.listen(3001, function(){
	console.log('running...')
})
