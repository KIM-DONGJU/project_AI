module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('board', { 
        board_title : {
            type : DataTypes.STRING(40)
        },
        board_content : {
            type : DataTypes.STRING(1000)
        }
    },
        {
            underscored : true,
            freezeTableName: true,//sequelize에서 테이블 자동 생성 시 복수형으로 안되도록 프리징.
        });
    return Board;
}

/**
 * create table board(
    board_id int(11) auto_increment,
    board_nickname 
    board_title varchar(40),
    board_content varchar(1000)
);
 */