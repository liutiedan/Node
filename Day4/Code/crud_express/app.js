/**
 * app.js 入门模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */

var express = require('express')
var fs = require('fs')
var router = require('./router')
var bodyParser = require('body-parser')


var app = express()

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

app.engine('html', require('express-art-template'));


// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//把路由容器挂载到app服务中
app.use(router)

// app.get('/',function(req,res){
// 	fs.readFile('./data.json', 'utf8', function(err, data){
// 		//readFile的第二个参数是可选的，传入utf8就是告诉他把读取的文件直接按照urf8编码转成我们能认识的字符
// 		//除了这样转换之外，也可以通过data.toString()的方式
// 		if(err){
// 			return res.status(500).send('Server error.')
// 		}
// 		// console.log(JSON.parse(data))
// 		res.render('index.html',{
// 		fruits: [
// 			'苹果',
// 			'香蕉',
// 			'橘子'
// 		],
// 		//从文件中读取的数据一定是字符串
// 		//不能直接data因为此时data是String类型的，我们要的是数组
// 		students: JSON.parse(data).students
// 	})
// 	})

// })

app.listen(3001, function(){
	console.log('3001 running...')
})