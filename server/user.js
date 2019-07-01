const express = require('express');
const utils = require('utility');

const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const _filter = {'pwd':0,'__v':0};

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
Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        const resObj = {
			code: 200,
			body: {
				data: doc
			}
		}
		return res.json(resObj)
    })
})
Router.get('/info',function(req,res){
    // cookie 的校验 用户有没有登录
    User.find({},function(err,doc){
        return res.json({code:0,data:doc})
    })
})
Router.post('/register',function(req,res){
    console.log(req.body)
    const {user, pwd } = req.body
    User.findOne({user},function (err,doc) {
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        User.create({user,pwd},function(e,d){
            if(e){
                return res.json({code:1,msg:'后端出错了'})
            }
            return res.json({code:0})
        })
    })
})

module.exports = Router;