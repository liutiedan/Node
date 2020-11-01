
//当你以get方法请求/的时候，执行对应的处理函数
app.get('/',function(req, res){
	res.send('hello world')
})

//当你以POST方法请求/的时候，执行对应的处理函数
app.post('/',function(req, res){
	res.send('got a post request')
})