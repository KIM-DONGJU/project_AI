var express = require('express');
var router = express.Router();
const controller = require("../app/controllers/member.controller.js");

var cors = require('cors');

router.get("/", cors(8080), controller.findAll);

router.delete('/:id', cors(8080), controller.deleteBoard);

router.get('/:id', cors(8080),controller.findBoardById);

// router.get('/delete', function (req, res) {
//     console.log("응답은 된다")
//   });

router.post('/', cors(8080), controller.createBoard)

router.put('/', cors(8080), controller.updateBoard)

module.exports = router;