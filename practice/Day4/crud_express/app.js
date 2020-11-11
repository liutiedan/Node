/*
	body-parser 解析表单 post 请求体
*/

let express = require('express');
let fs = require('fs');
let template = require('art-template');
let router = require('./router1');
var bodyParser = require('body-parser')

var app = express();

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

//配置express模板引擎
app.engine('html', require('express-art-template'));

//配置通用的JSON和URL编码解析器
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

//将路由容器挂载到APP服务中
app.use(router);

app.listen(3001, function(){
	console.log('3001 running...')
})