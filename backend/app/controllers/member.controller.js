const db = require('../models'); // 자동으로 models 폴더 하위의 index.js를 인식.
// const boardModel = require('../models/board.model');

const Member = db.member;
const Board = db.board;

exports.createMember = (member) => {
    return Member.create({
        member_email : member.member_email,
        member_pw  : member.member_pw,
        member_nickname : member.member_nickname,
        member_google : member.member_google
    })
        .then((member) => {
            console.log(`>> Created member :  + ${JSON.stringify(member, null, 4)}`);
            return member;
        })
        .catch((err) => {
            console.log(`>> Error while creating member : ${err}`);
        })       
}

// exports.createBoard = (member_id, board) => {
//     return Board.create({
//         board_title : board.board_title,
//         board_content : board.board_content,
//         member_id : member_id
//     })
//         .then((board) => {
//             console.log(">> Created board: " + JSON.stringify(board, null, 4));
//             return board;
//         })
//         .catch((err) => {
//             console.log('>> Error while creating board: ' + err);
//         })
// }

exports.createBoard = (req, res) => {
    return Board.create({
        board_title : req.body.board_title,
        board_content : req.body.board_content,
        member_id : req.body.member_id
    })
        .then((board) => {
            // console.log(">> Created board: " + JSON.stringify(board, null, 4));
            res.send(board)
        })
        .catch((err) => {
            console.log('>> Error while creating board: ' + err);
        })
}

exports.findAll2 = (req, res) => {//search
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Board.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
        });
}

exports.findAll = (req, res) => {
    console.log('여긴?');
    Board.findAll(
        {include: [{model : Member, as : 'member'}] })
        .then(data => {
           res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
        });
}

exports.findBoardById = (req, res) => {

    const id = req.params.id

    Board.findOne({
        where : { id : id},
        include: [{model : Member, as : 'member'}]
    })
        .then((data) => {
            console.log('쿼리날림?');
            res.send(data);
        })
        .catch((err, id) => {
            console.log('못날림');
            console.log(`>> Error while finding board : is ${id} is `, err);
        })
}

exports.updateBoard = (req, res) => {
    
    const id = req.body.board_id

    Board.update(req.body,{
        where : {id: id}
    })
        .then((num) => {
            if(num == 1){
            res.send({
                message: `Update Success`
            })
            } else {
                res.send({
                    message: `Cannot Update Tutorial with id = ${id}`
                })
            }
        })
        .catch((err) => {
            console.log('>> Error while updating board: ' + err);
        })
}
