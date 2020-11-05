const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//创建一个模型，就是设计数据库，MongoDB是动态的，只需要在代码中设计你的数据库就可以了
//mongoose这个包可以让你的设计编写过程变得非常简单
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

//持久化保存Kitty实例
kitty.save().then(function(err){
	if(err){
		console.log(err);
	}else{
		console.log('meow')
	}
})

