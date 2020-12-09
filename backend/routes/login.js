var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
var cors = require('cors');

secret = 'p!@#i!@#n!@#k!@#p!@#a!@#n!@#g!@#u!@#i!@#n';

var mysql_db = require('../mysql-db');
const { use } = require('passport');


// router.get('/login', function (req, res, next) {
//     res.render('login');
// });

// router.post('/', function (req, res, next) {
//     var member_email = req.body['member_email'];
//     var member_pw = req.body['member_pw'];
//     var member_pw_re = req.body['userPwRe'];
//     var member_nickname = req.body['member_nickname'];
//     var member_google = req.body['member_google'];

//     if (member_pw == '' && member_google == 1) {
//         mysql_db.query('select * from Member where member_email=\'' + member_email + '\'', function (err, rows, fields) {
//             if (!err) {
//                 if (rows[0] != undefined) {
//                     console.log(rows[0])
//                     res.send('email : ' + member_email + '<br>' +
//                         'nickname : ' + member_nickname + '<br>');
//                 } else {
//                     mysql_db.query('insert into Member(member_email, member_pw, member_nickname, member_google) values(?,?,?,?)', [member_email, member_pw, member_nickname, member_google], function (err, rows, fields) {
//                         if (!err) {
//                             res.send('email : ' + member_email + '<br>' +
//                                 'nickname : ' + member_nickname + '<br>');
//                         } else {
//                             console.log('error 발생')
//                             res.send('err : ' + err);
//                         }
//                     });
//                 }
//             } else {
//                 res.send('error : ' + err);
//             }
//         });
//     } else {
//         mysql_db.query('select * from Member where member_email=\'' + member_email + '\' and member_pw=\'' + member_pw + '\'', function (err, rows, fields) {
//             if (!err) {
//                 if (rows[0] != undefined) {
//                     console.log(rows[0])
//                     res.send('email : ' + member_email + '<br>' +
//                         'pw : ' + member_pw + '<br>' +
//                         'nickname : ' + member_nickname + '<br>');
//                 } else {
//                     console.log(rows[0]);
//                     res.send('no data?');
//                 }
//             } else {
//                 res.send('error : ' + err);
//             }
//         });

//     }

router.post('/checklogin',function (req, res) {
    let member = req.body.member;
    const email = member.member_email;
    const pw = member.member_pw;
    const google = member.member_google;

    mysql_db.query('SELECT member_id, member_email, member_pw, member_nickname FROM member WHERE member_email = "' + email + '"', function (err, row, fields) {
      if (row[0] === undefined || err) {
        res.json({ // 매칭되는 아이디 없을 경우
          success: false,
          message: 'Login failed please check your id or password!'
        })
      }
      else if ((row[0] !== undefined) && (pw !== '')) {
        bcrypt.compare(pw, row[0].member_pw, function (err, res2) {
          if (res2) {
            let user = {
              member_id : row[0].member_id,
              member_nickname : row[0].member_nickname
            };
            const token = jwt.sign({ user }, secret);
            res.json({ // 로그인 성공
              token,
              success: true,
              message: 'Login successful!'
            })
          }
          else {
            res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            success: false,
              success: false,
              message: '비밀번호가 틀렸습니다.'
            })
          }
        })
      } else if ((row[0] !== undefined) && (google == 1)) {
          res.json({ // 로그인 성공 
            success: true,
            message: 'google login success'
          })
        } else if (pw == '') {
          res.json({
            success: false,
            message: '비밀번호를 입력해주세요.'
          })
        }
    })
  });

module.exports = router;