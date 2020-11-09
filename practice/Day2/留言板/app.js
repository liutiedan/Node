var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url')

var comments = [
	{
		name: '张三1',
		message: '今天天气不错',
		dataTime: '2015-10-16'
	},
	{
		name: '张三2',
		message: '今天天气不错',
		dataTime: '2015-10-16'
	},
	{
		name: '张三3',
		message: '今天天气不错',
		dataTime: '2015-10-16'
	},
	{
		name: '张三4',
		message: '今天天气不错',
		dataTime: '2015-10-16'
	},
	{
		name: '张三5',
		message: '今天天气不错',
		dataTime: '2015-10-16'
	},

]

var server = http.createServer();

server.on('request',function(req, res){
	// res.end('Hello')
	//将路径解析为一个方便操作的对象，第二个参数为true表示直接将查询字符串转换为一个对象
	let parseObj = url.parse(req.url, true);
	// console.log(parseObj)
	let pathname = parseObj.pathname;

	if(pathname === '/'){
		fs.readFile('./views/index.html', function(err, data){
			if(err){
					res.end('404 Not Found')
			}
			var htmlStr = template.render(data.toString(), {
					comments: comments
			})
			res.end(htmlStr)
		})
	}else if(pathname === '/post'){
		fs.readFile('./views/post.html', function(err, data){
			if(err){
					res.end('404 Not Found')
			}
			res.end(data)
		})
	}else if(pathname == '/pinglun'){
		let comment = parseObj.query;
		comment.dateTime = '2020-11-7';
		comments.push(comment);
		res.statusCode = 302;
		res.setHeader('Location', '/');
		res.end();
	}else{
		fs.readFile('./views/404.html', function(err, data){
				res.end(data)
		})
	}

});

server.listen(3001, function(){
	console.log('running...')
});
