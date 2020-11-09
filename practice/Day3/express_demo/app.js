var express = require('express');

var app = express();

app.get('/',function(req, res){
	res.send('hello express')
})

app.get('/post', function(req, res){
	console.log(req.query)
	res.send('hello about');
})

app.listen(3001, function(){
	console.log('running...');
})
