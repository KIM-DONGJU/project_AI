const controller = require("../app/controllers/member.controller.js");

var express = require('express');
var router = express.Router();

var cors = require('cors');

router.get("/", cors(8080), controller.findAll);

router.get('/:id', cors(8080),controller.findBoardById);

router.post('/', cors(8080), controller.createBoard)

router.put('/', cors(8080), controller.updateBoard)

module.exports = router;