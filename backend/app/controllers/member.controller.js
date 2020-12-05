const db = require('../models'); // 자동으로 models 폴더 하위의 index.js를 인식.
const boardModel = require('../models/board.model');

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

exports.createBoard = (member_id, board) => {
    return Board.create({
        board_title : board.board_title,
        board_content : board.board_content,
        member_id : member_id
    })
        .then((board) => {
            console.log(">> Created board: " + JSON.stringify(board, null, 4));
            return board;
        })
        .catch((err) => {
            console.log('>> Error while creating board: ' + err);
        })
}
