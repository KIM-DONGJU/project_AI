var express = require('express');
var router = express.Router();

var mysql_db = require('../mysql-db');

router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/', function (req, res, next) {
    var userId = req.body['userId'];
    var userPw = req.body['userPw'];
    var check = req.body['check'];
    mysql_db.query('select * from user where ID=\'' + userId + '\' and name=\'' + userPw + '\'', function (err, rows, fields) {
        if (!err) {
            if (rows[0]!=undefined) {
                console.log(rows[0])
                res.send('id : ' + rows[0]['ID'] + '<br>' +
                    'pw : ' + rows[0]['name']);
            } else if (check == 1) {
                mysql_db.query('insert into user values(?,?)', [userId, userPw], function (err, rows, fields) {
                    if (!err) {
                        res.send('id : ' + userId + '<br>' +
                        'pw : ' + userPw);
                    } else {
                        console.log('error 발생')
                        res.send('err : ' + err);
                    }
                });
            } else {
                console.log(rows[0]);
                res.send('no data?');
            }
        } else {
            res.send('error : ' + err);
        }
    });
});

module.exports = router;