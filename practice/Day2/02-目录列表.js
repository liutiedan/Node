var http = require('http');
var fs = require('fs');

//1.创建Server
var server = http.createServer();

//2.监听server的request请求事件，设置请求处理函数
//Apache服务器有一个默认www目录，所有存在www目录的资源都可以通过127.0.0.1:80/浏览
var wwwDir = 'E:/Node/Code/Node/Day2/www';
server.on('request', function(req, res){
	// var url = req.url;
	
	fs.readFile('./template.html', function(err, data){
		if(err){
			return res.end('请求文件失败')
		}

		fs.readdir(wwwDir, function(err, files){
			if(err){
				return res.end('请求目录失败')
			}

			var content = '';
			files.forEach(function(item){
				console.log(item);
				content += `
					<tr>
				        <td data-value="apple/"><a class="icon dir" href="E:/Node/Code/Node/Day2/www">${item}/</a></td>
				        <td class="detailsColumn" data-value="0"></td>
				        <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
				     </tr>
				`
			})
			data = data.toString();
			data = data.replace('^_^', content);
			res.end(data);
		})
	})
})

//3.绑定端口号，启动服务
server.listen(3001, function(){
	console.log('running...')
})
