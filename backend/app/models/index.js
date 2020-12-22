//initial sequelize.

const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases: false, 

    port : dbConfig.port,
    dialectOptions: {
        // useUTC: true, //for reading from database
        dateStrings: true, // ! 데이터 로드시 문자열로 가저옴
        typeCast: true, // ! 타임존을 역으로 계산하지 않음
      },
    timezone: '+09:00',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.member = require('./member.model.js')(sequelize, Sequelize);
db.board = require('./board.model.js')(sequelize,Sequelize);

db.member.hasMany(db.board, { as : 'board', foreignKey : 'member_id'});
db.board.belongsTo(db.member, {as : 'member', foreignKey : 'member_id'});

// db.member.hasMany(db.board);
// db.board.belongsTo(db.member);

module.exports = db;

