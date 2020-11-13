var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var router = require('./router_diy')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))


app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.get('/', function(req, res){
// 	res.render('index.html')
// })
app.use(session({
	//配置加密字符串，他会在原有加密基础上和这个字符串拼起来去加密
  secret: 'itcast',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))

// 把路由挂载到 app 中
app.use(router)

app.listen(5000, function () {
  console.log('running...')
})
