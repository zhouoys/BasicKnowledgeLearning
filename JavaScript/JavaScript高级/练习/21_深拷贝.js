var arr = [{
    id:"1001",
    name:'smilly',
    hobbies:[{
        id:'1',
        name:'baseball'
    },{
        id:'2',
        name:'playfootball'
    },{
        id:'3',
        name:'basketball'
    }]
},{
    id:'1002',
    name:'alice1002',
    dosomething:[{
        id:'90',
        name:'piano'
    },{
        id:'100',
        name:'flySket'
    }]
},{
    id:'1003',
    name:'alice1003',
    dohouseWord:[{
        id:'901',
        name:'piano1003'
    },{
        id:'1000',
        name:'flySket1003'
    }]
},{
    id:'1004',
    name:'alice1004',
    friends:[{
        id:'910',
        name:'piano1004'
    },{
        id:'1100',
        name:'flySket1004'
    }]
}]

//深拷贝 arr

function deepCopy(resource,target){
        // 遍历对象
        for(var index in resource){
        // 判断对象的属性值类型
        if(Array.isArray(resource[index]) && resource[index].length > 0){
            // 属性值为数组
            target[index] = [];
            deepCopy(resource[index],target[index])
        } else if(target[index] instanceof Object){
            // 属性值为对象
            target[index] = {}
            deepCopy(resource[index] , target[index])
        } else {
            // 属性值为普通类型
            target[index] = resource[index]
        }
        }
}
var obj1 = arr;
var obj2 = [];
deepCopy(obj1,obj2);
console.log(obj1);
console.log("------------------------------------------------------------------");
console.log(obj2);
