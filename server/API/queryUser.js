const db = require("../db/index.js");

exports.post = (req, res) => {
    const whereSqlArr = [];
    // req.body.uid !== undefined && whereSqlArr.push(`uid like "%${req.body.uid}%"`);
    req.body.usex !== undefined && whereSqlArr.push(`usex like "%${req.body.usex}%"`);
    req.body.ubirth !== undefined && whereSqlArr.push(`ubirth like "%${req.body.ubirth}%"`);
    req.body.uprovince !== undefined && whereSqlArr.push(`uprovince like "%${req.body.uprovince}%"`);
    req.body.uname !== undefined && whereSqlArr.push(`uname like "%${req.body.uname}%"`);
    req.body.uzy !== undefined && whereSqlArr.push(`uzy like "%${req.body.uzy}%"`);
    req.body.uaddress !== undefined && whereSqlArr.push(`uaddress like "%${req.body.uaddress}%"`);

    const whereSql = whereSqlArr.length ? whereSqlArr.join(" and ") : "1 = 1";
    var sql = `select * from jike where ${whereSql} limit 100`;
    db.query(sql,(err, data) => {
        if(err) {
            return res.send({
                err_message:'错误：' + err.message,
                code:-1
            })
        }
        res.send({
            list:data,
            code:0
        });        
    });
}