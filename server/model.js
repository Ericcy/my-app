const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
// 提示链接mongoose成功， 没有其他作用
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        // 'type': {type: String, require: true},
        // 头像
        'avatar': {type: String},
        // 个人简介
        'desc': { type: String},
        // 职位名
        'jobname': { type: String},

    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}