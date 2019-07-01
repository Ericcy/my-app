const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRouter = require('./user')

// 新建app 
const app = new express()

// post 请求需要额外处理
// 1.引用body-parser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cookie-parser
app.use(cookieParser())
// 2.允许跨域
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use('/user',userRouter)
app.listen(3000,function(){
    console.log('Node app start at port 3000')
})