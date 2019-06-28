const express = require('express');
const mongoose = require('mongoose');

// 链接mongoose
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

// 定义类型
const User = mongoose.model('user',new mongoose.Schema({
    user:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    }
}))
// 新增数据
// User.create({
//     user: 'wcy',
//     age: 28
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// 删除数据  1、删除条件，2、处理函数
// User.remove({age:27},function(err,doc){
//     console.log(doc)
// })

// 更新数据
// User.update({user:'wcy'},{$set:{age:18}},function(err,doc){
//     console.log(doc)
// })

// 新建app 
const app = new express()


app.get('/',function(req,res){
    res.send('<h1>server</h1>')
})
app.get('/data', function(req,res){
    User.find({user: 'wcy'},function(err,doc){
        if(!err){
            res.json(doc)
        }
    })
})
app.listen(3000,function(){
    console.log('Node app start at port 3000')
})