var express = require('express')

var app = express()

app.use('/public/', express.static('./public/'))
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
//配置使用art-template模板引擎
//第一个参数，表示当渲染以.art结尾的文件的时候，使用art-template模板引擎
//express-art-template是专门用来在Express中把art-template整合到Express中的
//虽然这里不需要加载art-template但是也必须安装，原因在于express-art-template依赖了art-template
app.engine('html', require('express-art-template'));

//Express为response响应对象提供了一个方法：render
//render方法默认是不可以使用的但是如果配置了模板引擎就可以使用了
//res.render('html模板名'，{模板数据}) (没有模板数据就不用传)
//默认第一个参数不能写路径，会去项目中的views目录查找该模板文件
//也就是说，Express有一个约定：开发人员把所有视图文件都放到views目录中
app.get('/', function(req, res){
	res.render('index.html',{
		comments: comments
	})
})

// app.get('/admin', function(req, res){
// 	res.render('admin/index.html'，{
// 		title: '管理系统'
// 	})//没写这个文件夹
// })

//如果想要修改默认的views目录，则可以
// app.set('views', render函数的默认路径)



// app.get('/', function(req, res){
// 	res.send('/')
// })

app.get('/post', function(req, res){
	res.render('post.html')
})

app.get('/pinglun', function(req, res){
	// console.log(req.query)
	var comment = req.query//只能拿get请求参数
	comment.dataTime = '2020-10-31 21:54'
	comments.unshift(comment)
	res.redirect('/')//Express新方法
})

app.listen(3001, function(){
	console.log('App is running at port 3001')
})