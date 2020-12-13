const { sequelize } = require('../models');
const db = require('../models'); // 자동으로 models 폴더 하위의 index.js를 인식.

const Op = db.Sequelize.Op;

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
    const title = req.params.title;

    var condition = { board_title: { [Op.like]: `%${title}%` } };

    Board.findAll({include: [{model : Member, as : 'member'}], where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving boards."
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
    console.log(id, 'test');
    Board.findOne({
        where : {id : id},
        include: [{model : Member, as : 'member'}]
    })
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((err, id) => {
            console.log(`>> Error while finding board : is ${id} is `, err);
        })
}

exports.updateBoard = (req, res) => {
    const id = req.body.board_id
    console.log(id, 'update id');

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
exports.deleteBoard = (req, res) => {
    const id = req.params.id;
  
    Board.destroy({
        where: { id: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                success:true,
                message: "Tutorial was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
            });
        });
    };
