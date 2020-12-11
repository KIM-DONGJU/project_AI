var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var cors = require('cors');

secret = 'p!@#i!@#n!@#k!@#p!@#a!@#n!@#g!@#u!@#i!@#n';

var mysql_db = require('../mysql-db');

router.post('/checklogin',function (req, res) {
    console.log('login.js왓음');
    let member = req.body.member;
    const email = member.member_email;
    const pw = member.member_pw;
    const google = member.member_google;

    mysql_db.query('SELECT id, member_email, member_pw, member_nickname FROM member WHERE member_email = "' + email + '"', function (err, row, fields) {
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
              id : row[0].id,
              member_nickname : row[0].member_nickname
            };
            res.json({ // 로그인 성공
              user,
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