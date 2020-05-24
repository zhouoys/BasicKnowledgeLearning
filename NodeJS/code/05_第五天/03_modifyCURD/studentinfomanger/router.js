/**
 * 专门路由处理模块
 */
var express = require('express');
var Student = require('./student');
// 创建路由容器
var router = express.Router();
/**
 * 将简单路由挂载道router容器上面
 */
// 首页展示
 router.get('/find',function(request,response){
     Student.find(function(param,data){
        if(param){
            return response.status(500).send('server error!');
        }
        response.render('index.html',{
            title:'学生信息首页',
            studentInfoList:data
        })
     })
 })
 // 跳转添加
 router.get('/add',function(request,response){
     response.render('add.html',{
         title:'添加学生信息'
     })
 })
 // 保存添加
 router.post('/add',function(request,response){
     Student.add(request.body,function(param){
         if(param){
             return response.status(500).send('server error!');
         }
         console.log('测试测试测试测试测试');
         return response.redirect('find')
     })
 })

 // 跳转编辑
router.get('/edit',function(request,response){
    Student.edit(request.query.id,function(param,data){
        if(param){
            return response.status(500).send('the server error!!')
        }
        return response.render('edit.html',{
            title:'编辑学生信息',
            studentInfo:data
        })
    })
})
// 保存编辑
router.post('/edit',function(request,response){
    Student.save(request.body,function(param){
        if(param){
            return response.status(500).send('the server error!');
        }
        return response.redirect('/find');
    })
})
// 依据id删除学生信息
router.get('/delete',function(request,response){
    Student.deleteById(request.query.id,function(param){
        if(param){
            return response.status(500).send('the server error!!');
        }
        return response.redirect('/find');
    })
})
/**
 * 
 * 将结果导出
 */
module.exports = router;