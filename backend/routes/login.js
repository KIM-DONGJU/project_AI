var express = require('express');
var router = express.Router();

var mysql_db = require('../mysql-db');
const { use } = require('passport');

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
    var Client = require('mongodb').MongoClient;

    Client.connect('mongodb://localhost:27017/user', { useUnifiedTopology: true }, function(error, database){
        if(error) {
            console.log(error);
        } else {
            var db = database.db('user');
            var query = {email:userId};
            
            // 2. find( ) 함수에 query 입력
            var cursor = db.collection('userinfo').find(query);
            cursor.each(function(err,doc){
                if(err){
                    console.log(err);
                }else{
                    if(doc != null){
                        console.log(doc);
                        return false;
                    } else {
                        // 1. 입력할 document 생성
                        var info = {email:userId, nickname:userPw};
                        db.collection('userinfo').insertOne(info);
                        console.log('Mongo Email :' + userId, 'Mongo Nickname :' + userPw);
                    };
                }
            });
        }
    });
});

module.exports = router;