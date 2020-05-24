/**
 * 创建关于db.json的增加，删除，修改的API并提供给router.js
 * 进一步修改，采用mongodb数据库与mongoose中间件形式重写
 */
var fs = require("fs");
// 首页展示列表API
exports.find = function(callback){
    fs.readFile('./db.json','utf8',function(error,data){
        if(error){
            return callback(error)
        }
        return callback(null,JSON.parse(data).studentInfoList)
    })
}
// 添加保存学生信息
exports.add = function(studentInfo,callback){
    fs.readFile('./db.json','utf8',function(error,data){
        if(error){
            return callback(error)
        }
    var studentInfoList = JSON.parse(data).studentInfoList
    var id = new Date().getTime().toString();
    studentInfo.id = id;
    console.log('添加学生信息:',studentInfo);
    studentInfoList.unshift(studentInfo);
    var obj = {};
    obj.studentInfoList = studentInfoList
    fs.writeFile('./db.json',JSON.stringify(obj),function(error){
        if(error){
            return callback(error);
        } else {
            return callback(null);
        }
    })
    })
}

exports.edit = function(id,callback){
    fs.readFile('./db.json','utf8',function(error,data){
        if(error){
            return callback(error);
        }
        var studentInfoList = JSON.parse(data).studentInfoList;
        var targetobj = studentInfoList.find(function(item){
            return item.id === id;
        })
        return callback(null,targetobj);
    })
}
// 保存编辑的学生信息
exports.save = function(studentInfo,callback){
    fs.readFile('./db.json','utf8',function(error,data){
        if(error){
            return callback(error);
        }
        var studentInfoList = JSON.parse(data).studentInfoList;
        var targetobj = studentInfoList.find(function(item){
            return item.id === studentInfo.id;
        })
        console.log('studentInfo',studentInfo);
        for(var key in studentInfo){
            targetobj[key] = studentInfo[key]
        }
        console.log('targetobj',targetobj);
        var obj = {};
        obj.studentInfoList = studentInfoList;
        console.log('查看编辑效果',obj);
        fs.writeFile('./db.json',JSON.stringify(obj),function(error){
            if(error){
                callback(error);
            } else {
                callback(null);
            }
        })
    })
}

// 依据id删除学生的信息
exports.deleteById = function(id,callback){
    fs.readFile('./db.json','utf8',function(error,data){
        if(error){
            return callback(error);
        }
        var studentInfoList = JSON.parse(data).studentInfoList;
        var targetIndex = studentInfoList.findIndex(function(item){
            return item.id === id;
        })
        //  删除一个数组中的对象，返回被删除的对象，同时修改原数组。
        studentInfoList.splice(targetIndex,1);
        var obj = {};
        obj.studentInfoList = studentInfoList;
        fs.writeFile('./db.json',JSON.stringify(obj),function(error){
            if(error){
                callback(error);
            } else {
                callback(null);
            }
        })
    })

}