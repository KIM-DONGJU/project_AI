module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('member', {
        member_email : {
            type : DataTypes.STRING(20)
        },
        member_pw : {
            type : DataTypes.STRING
        },
        member_nickname : {
            type : DataTypes.STRING,
            allowNull : false
        },
        member_google : {
            type : DataTypes.INTEGER(2)
        }
    },
        {   
            timestamps: false,
            underscored : true,
            freezeTableName: true,//sequelize에서 테이블 자동 생성 시 복수형으로 안되도록 프리징.
        }
    );
    return Member;
}

/**
 * create table member(
    member_id int(11) auto_increment,
    member_email varchar(20),
    member_pw varchar(256),
    member_nickname varchar(20) not null,
    member_google int(2),
    unique key(member_id)
    );
 */