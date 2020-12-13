var express = require('express');
var router = express.Router();
const controller = require("../app/controllers/member.controller.js");

var cors = require('cors');

router.get('/', controller.findAll);

router.delete('/:id', controller.deleteBoard);

router.get('/:id',controller.findBoardById);

// router.get('/search/:title', controller.findAll2)
router.get('/search/:title', controller.findAll2)

router.post('/', controller.createBoard)

router.put('/', controller.updateBoard)

module.exports = router;