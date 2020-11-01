var http = require('http')
var fs = require('fs')
var template = require('art-template')
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



http
	.createServer(function(req, res){
		// res.end('hello')
		//将路径解析为一个方便操作的对象，第二个参数为true表示直接将查询字符串转换为一个对象
		//（通过query属性来访问）
		var parseObj = url.parse(req.url, true)
		// var url = req.url
		//单独获取不包含查询字符串的路径部分I(该路径不包含？之后的内容)
		pathname = parseObj.pathname
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
		} else if(pathname === '/post'){
			fs.readFile('./views/post.html', function(err, data){
				if(err){
					return res.end('404 Not Found')
				}
				res.end(data)
			})
		}
		else if(pathname.indexOf('/public/') === 0){
			fs.readFile('.' + pathname, function(err, data){
				if(err){
					return res.end('404 Not Found.')
				}
				res.end(data)
			})
		}else if(pathname == '/pinglun'){
			// console.log('收到表单请求了',parseObj.query)
			// res.end(JSON.stringify(parseObj.query))
			var comment = parseObj.query
			comment.dataTime = '2020-10-24' 
			comments.push(comment)
			res.statusCode = 302
			res.setHeader('Location', '/')
			res.end()
		}
		else{
			fs.readFile('./views/404.html', function(err, data){
				res.end(data)
			})
		}
		
	})
	.listen(3001, function(){
		console.log('running...')
	})