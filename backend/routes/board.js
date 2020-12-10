const controller = require("../app/controllers/member.controller.js");

var express = require('express');
var router = express.Router();

var cors = require('cors');

router.get("/", controller.findAll);

router.get('/:id', cors(8080),controller.findBoardById);

module.exports = router;