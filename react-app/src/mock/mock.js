import Mock from 'mockjs';
var Random=Mock.Random;
let date =  Mock.mock('http://www.baidu.com',
    {
        'list|1-10':[
            {
            'num|+1':1,
            'name':'@cname',
            "date":'@date',
            "image":Random.dataImage('300x250',"haha")

        }
    ]
    })
    export default date;