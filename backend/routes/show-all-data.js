// /*show-all-data.js*/
// var express = require('express');
// var router = express.Router();
// var cors = require('cors');

// const mariaDB = require('../mysql-db');

// // router.get('/apis', cors(8081), function (req, res, next) {
// //     mariaDB.query('select * from Member', function (err, rows, fields) {
// //         if (!err) {
// //             console.log(rows);
// //             // var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
// //             //     'fields : ' + JSON.stringify(fields);
// //             // res.send(result);
// //             res.send(JSON.stringify(rows));
// //         } else {
// //             console.log('query error : ' + err);
// //             res.send(err);
// //         }
// //     });
// // });

// router.get('/', function (req, res, next) {
//     mariaDB.query('select * from Member', function (err, rows, fields) {
//         if (!err) {
//             console.log(rows);
//             var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
//                 'fields : ' + JSON.stringify(fields);
//             res.send(result);
//         } else {
//             console.log('query error : ' + err);
//             res.send(err);
//         }
//     });
// });


// module.exports = router;


/*show-all-data.js*/
var express = require('express');
var router = express.Router();
var cors = require('cors');

const controller = require("../app/controllers/member.controller.js");

router.get("/board", cors(8080),controller.findAll);

const mysql_db = require('../mysql-db');

// router.get('/board', cors(8080), function (req, res, next) {
//   mysql_db.query('select * from board', function (err, rows, fields) {
//         if (!err) {
//             console.log(rows);
//             // var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
//             //     'fields : ' + JSON.stringify(fields);
//             // res.send(result);
//             res.send(JSON.stringify(rows));
//         } else {
//             console.log('query error : ' + err);
//             res.send(err);
//         }
//     });
// });

module.exports = router;