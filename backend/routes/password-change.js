var express = require('express');
var router = express.Router();

var mysql_db = require('../mysql-db');

router.get('/', function (req, res, next) {
    res.render('password');
});

router.post('/', function (req, res, next) {
    var member_email = req.body['member_email'];
    var member_pw = req.body['member_pw'];
    var member_pw_new = req.body['userPwRe'];
    var member_nickname = req.body['member_pw'];
    var member_google = req.body['member_google'];
    mysql_db.query('select * from Member where member_email=? and member_pw=?', [member_email, member_pw], function (err, rows, fields) {
        if (!err) {
            if (rows[0] != undefined) {
                mysql_db.query('update Member set member_pw=? where member_email=?', [member_pw_new, member_email], function (err, rows, fields) {
                    if (!err) {
                        res.send('password change success');
                    } else {
                        res.send('error : ' + err);
                    }
                });
            } else {
                res.send('no data');
            }

        } else {
            res.send('error : ' + err);
        }
    });

});

module.exports = router;