var fs = require('fs');



//这样写没办法决定代码顺序
fs.readFile('./data/a.txt', 'utf8', function(err, data){
	if(err){
		// return console.log('读取失败')
		throw err;
	}
	console.log(data);
	fs.readFile('./data/b.txt', 'utf8', function(err, data){
		if(err){
			// return console.log('读取失败')
			throw err;
		}
		console.log(data);
			
		fs.readFile('./data/c.txt', 'utf8', function(err, data){
			if(err){
				// return console.log('读取失败')
				throw err;
			}
			console.log(data);
		});
	});
});
