var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var mysql_db = require('../mysql-db');
const { use } = require('passport');

// router.get('/', function (req, res, next) {
//     res.render('join');
// });

// router.post('/', function (req, res, next) {
//     var member_email = req.body['member_email'];
//     var member_pw = req.body['member_pw'];
//     var member_pw_re = req.body['userPwRe'];
//     var member_nickname = req.body['member_pw'];
//     if (member_pw != '') {
//         if (userPw == userPwRe) {
//             mysqlDB.query('select EXISTS (select * from Member where member_email=\'' + member_email + '\') as overlap', function (err, rows, fields) {
//                 if (rows[0]['overlap'] != 1) {
//                     mysqlDB.query('insert into Member(member_email, member_pw, member_nickname) values(?,?,?)', [member_email, member_pw, member_nickname], function (err, rows, fields) {
//                         if (!err) {
//                             res.send('success');
//                         } else {
//                             res.send('err : ' + err);
//                         }
//                     });
//                 } else {
//                     res.send('해당 ID는 이미 존재합니다.');
//                 }
//             });
//         }else{
//             res.send('password not match!');
//         }
//     } else {
//         res.send('password를 입력해주세요.')
//     }
    
    
// });
router.post('/signUp', function (req, res) {
    let member = req.body.member;
    const email = member.member_email;
    const pw = member.member_pw;
    const pw_re = member.member_pw_re;
    const nickname = member.member_nickname;
    const google = member.member_google;

    mysql_db.query('SELECT member_email FROM member WHERE member_email = "' + email + '"', function (err, row, fields) {
      if (row[0] == undefined){ //  동일한 아이디가 없을경우,
        if (pw == pw_re || google === 1) {
            const salt = bcrypt.genSaltSync();
            let encryptedPassword = '';
            if (pw != '') {
                encryptedPassword = bcrypt.hashSync(pw, salt);
            }
            mysql_db.query('INSERT INTO member (member_email, member_pw, member_nickname, member_google) VALUES ("' + email + '","' + encryptedPassword + '","' + nickname + '","' + google + '")', member, function (err, row2) {
                if (err) throw err;
            });
            res.json({
                success: true,
                message: 'Sing Up Success!'
            })
        } else {
            res.json({
                success: false,
                message: '비밀번호가 일치하지 않습니다.'
            })
        }
      }
      else {
        res.json({
          success: false,
          message: 'Sign Up Failed Please use anoter ID'
        })
      }
    });
});





module.exports = router;