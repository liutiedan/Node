/*
	ES6新增的一个api
	promise是一个构造函数
*/

var fs = require('fs');
//创建一个promise容器，它本身不是异步的，里面的任务是异步的
let p1 = new Promise(function(resolve, reject){
	fs.readFile('./data/a.txt', 'utf8', function(err, data){
		if(err){
			//失败了，承诺容器中的任务失败了
			// console.log(err);
			//把容器的pending状态变为rejected
			reject(err);
		}else{
			//承诺容器中的任务成功了
			// console.log(data);
			//把容器的pending状态变为resolved
			resolve(data);
		}
	});
})

let p2 = new Promise(function(resolve, reject){
	fs.readFile('./data/b.txt', 'utf8', function(err, data){
		if(err){
			//失败了，承诺容器中的任务失败了
			// console.log(err);
			//把容器的pending状态变为rejected
			reject(err);
		}else{
			//承诺容器中的任务成功了
			// console.log(data);
			//把容器的pending状态变为resolved
			resolve(data);
		}
	});
})

let p3 = new Promise(function(resolve, reject){
	fs.readFile('./data/c.txt', 'utf8', function(err, data){
		if(err){
			//失败了，承诺容器中的任务失败了
			// console.log(err);
			//把容器的pending状态变为rejected
			reject(err);
		}else{
			//承诺容器中的任务成功了
			// console.log(data);
			//把容器的pending状态变为resolved
			resolve(data);
		}
	});
})

//链式
//then方法接受的就是resolve函数
p1
  .then(function(data){
  	console.log(data);
  	//当p1读取成功时
  	//当前函数中return的结果就可以在后面的then中function接收到
  	return p2;
  }, function(err){
  	console.log('读取文件失败')
  })
  .then(function(data){
  	console.log(data);
  	return p3;
  })
  .then(function(data){
  	console.log(data);
  })