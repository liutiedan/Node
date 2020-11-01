var foo = 'bar'

function add(x, y){
	return x + y
}

//只能得到我想要给的成员
//目的是为了解决变量命名冲突的问题
exports.add = add

//exports是一个对象
//我们可以通过多次为这个对象添加成员实现对外导出多个内部成员

exports.str = "hello"


//如果一个模块需要直接导出某个成员，使用下面这个方式
// module.exports = add

