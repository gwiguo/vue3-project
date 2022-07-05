const db = require("../db/index.js");

exports.post = (req, res) => {
    var sql = `select * from jike`;
    db.query(sql,(err, data) => {
        if(err) {
            return res.send({
                err_message:'错误：' + err.message,
                code:-1
            })
        }

        const [sexObj,birthObj,provinceObj,zyObj] = [{},{},{},{}];

        data.forEach(obj=>{
            if(!sexObj[obj.usex]){
                sexObj[obj.usex] = 1;
            }else{
                sexObj[obj.usex]++;
            }
            if(!birthObj[obj.ubirth]){
                birthObj[obj.ubirth] = 1;
            }else{
                birthObj[obj.ubirth]++;
            }
            if(!provinceObj[obj.uprovince]){
                provinceObj[obj.uprovince] = 1;
            }else{
                provinceObj[obj.uprovince]++;
            }
            
            if(!zyObj[obj.uzy]){
                zyObj[obj.uzy] = 1;
            }else{
                zyObj[obj.uzy]++;
            }
            
        });

        res.send({
            data:{
                sex:sexObj,
                birth:birthObj,
                province:provinceObj,
                zy:zyObj
            },
            code:0
        });        
    });
}