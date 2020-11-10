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

exports.updateById = function(student, callback){
	fs.readFile(dbPath, function(err, data){
		if(err){
			callback(err);
		}

		let students = JSON.parse(data).students;
		student.id = parseInt(student.id);

		let stu = students.find(function(item){
			return student.id === item.id;
		})
		console.log("学生:",student);

		for(let key in student){
			stu[key] = student[key];
		}

		let fileData = JSON.stringify({
			students: students//这里为什么可以？？？？
		})

		fs.writeFile(dbPath, fileData, function(err){
			if(err){
				return callback(err);
			}
			callback(null);
		})
	})
}

exports.deleteById = function(id, callback){
	fs.readFile(dbPath, 'utf8', function(err, data){
		if(err){
			return callback(err);
		}
		let students = JSON.parse(data).students;
		let deleteId = students.findIndex(function(item){
			return parseInt(id) === item.id
		})

		students.splice(deleteId, 1);
		let fileData = JSON.stringify({
			students: students
		})

		fs.writeFile(dbPath, fileData, function(err){
			if (err) {
				callback(err);
			}
			callback(null);
		})
	})
}