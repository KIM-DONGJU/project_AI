var express = require('express');
var router = express.Router();

var mysqlDB = require('../mysql-db');

router.get('/', function (req, res, next) {
    res.render('join');
});

router.post('/', function (req, res, next) {
    var userId = req.body['userId'];
    var userPw = req.body['userPw'];
    var userPwRe = req.body['userPwRe'];
    if (userPw == userPwRe) {
        mysqlDB.query('select EXISTS (select * from user where ID=\'' + userId + '\') as overlap', function (err, rows, fields) {
            if (rows[0]['overlap'] != 1) {
                mysqlDB.query('insert into user values(?,?)', [userId, userPw], function (err, rows, fields) {
                    if (!err) {
                        res.send('success');
                    } else {
                        res.send('err : ' + err);
                    }
                });
            } else {
                res.send('해당 ID는 이미 존재합니다.');
            }
        });
    }else{
        res.send('password not match!');
    }
});

module.exports = router;