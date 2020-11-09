var fs = require('fs')

//文件操作中的路径可以省略./

/*
	在文件操作的相对路径中
	./data/a.txt 相对于当前目录
	data/a.txt 相对于当前目录
	/data/a.txt 绝对路径，当前文件模块所处磁盘根目录
*/

//一种错误写法是'/data/a.txt代表从根目录里找，因为模块在D盘所以找的是D盘 'D:\data\a.txt'
fs.readFile('data/a.txt', function(err, data){

	if(err){
		console.log(err)
		return console.log('读取失败')
	}
	console.log(data.toString())
})

/*
	
*/


