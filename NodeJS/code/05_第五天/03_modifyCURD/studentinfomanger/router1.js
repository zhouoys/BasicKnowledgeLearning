/**
 * 使用mongoose + mongodb来处理
 */
var express = require('express');
var Student = require('./student1');
// 创建路由容器
var router = express.Router();
// 展示首页信息
router.get('/find',function(request,response){
    Student.find(function(error,data){
        if(error){
            console.log("首页初始化失败:"+error);
            response.status(500).send('the error hanppen!!')
        } else {
            response.render('index.html',{
                title:'首页信息',
                studentInfoList: data
            })
        }
    })
})
 // 跳转学生信息添加
 router.get('/add',function(request,response){
    response.render('add.html',{
        title:'添加学生信息'
    })
})
// 保存学生信息添加
router.post("/add",function(request,response){
    let {name,motto,gender,hobby} = request.body
    var student = new Student({
       name,motto,gender,hobby
    })
    student.save(function(error,data){
        if(error){
            console.log('添加学生信息保存失败：',error);
            response.status(500).send('the error happen!!')
        } else {
            response.redirect('/find')
        }
    })
    
})
// 编辑学生信息页面展示
router.get('/edit',function(request,response){
    var _id = request.query.id.replace(/"/g,'');
    console.log(_id);
    Student.findById(_id,function(error,data){
        if(error){
            console.log('编辑回显学生信息报错:',error);
            response.status(500).send('the error happen!!');
        } else {
            response.render('edit.html',{
                title:'编辑学生信息',
                studentInfo:data
            });

        }
    })
})
// 编辑学生信息更新
router.post('/edit',function(request,response){
    var _id = request.body.id.replace(/"/g,'');
    var obj = request.body;
    Student.findByIdAndUpdate(_id,obj,function(error,data){
        if(error){
            console.log('保存编辑信息失败',error);
            response.status.send('the error happen!!!')
        } else {
            response.redirect('/find')
        }
    })
})
// 删除学生信息
router.get('/delete',function(request,response){
    var _id = request.query.id.replace(/"/g,'');
    Student.findByIdAndRemove(_id,function(error,data){
        if(error){
            console.log('删除失败',error);
            response.status(500).send('the error happen');
        } else {
            response.redirect('/find')
        }
    })
})
// 导出路由容器
module.exports = router;