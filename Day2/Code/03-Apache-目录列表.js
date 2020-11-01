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
	fs.readFile('./template.html', function(err, data){
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
			// console.log(files)
			var content = ''
			files.forEach(function(item){
				//在EcmaScript 6的``(反引号)字符串中，可以使用${}来引用变量
				content += `
					 <tr>
				        <td data-value="apple/"><a class="icon dir" href="D:\\Node\\Day2\\www">${item}/</a></td>
				        <td class="detailsColumn" data-value="0"></td>
				        <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
				     </tr>
				`
			})
			data = data.toString()
			data = data.replace('^_^', content)
			// console.log(data)
			res.end(data)
		})
		// res.end(data)
	})
})

//3.绑定端口号，启动服务
server.listen(3001, function(){
	console.log('running...')
})
