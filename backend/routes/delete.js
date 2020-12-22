/*show-all-data.js*/
var express = require('express');
var router = express.Router();

const mariaDB = require('../mysql-db');

router.get('/', function (req, res, next) {
    console.log('connect?');
    mariaDB.query('select * from Member', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

module.exports = router;