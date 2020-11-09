/*
	操作文件中的数据，增删改查
*/

let fs = require('fs')
let dbPath = './data.json';

//获取学生列表
exports.find = function(callback){
	fs.readFile(dbPath, 'utf8', function(err, data){
		if(err){
			return callback(err);
		}
		// console.log(JSON.parse(data))
		return callback(null, JSON.parse(data).students);
	})
}

exports.save = function(student, callback){
	fs.readFile(dbPath, 'utf8', function(err, data){
		if (err) {
	      return callback(err)
	    }
	    let students = JSON.parse(data).students;
	    student.id = students.length;
	    students.push(student);

	    let fileData = JSON.stringify({
	    	students: students
	    })

	    fs.writeFile(dbPath, fileData, function(err){
	    	if (err) {
		        // 错误就是把错误对象传递给它
		        return callback(err)
		    }
		    callback(null);
	    })
	})
}

exports.findById = function(id, callback){
	fs.readFile(dbPath, 'utf8', function(err, data){
		if(err){
			return callback(err);
		}
		let students = JSON.parse(data).students;

		let student = students.find(function(item){
			return item.id === parseInt(id);
		})

		callback(null, student);
	})
}