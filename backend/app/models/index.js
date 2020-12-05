//initial sequelize.

const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases: false, 

    port : dbConfig.port
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.member = require('./member.model.js')(sequelize, Sequelize);
db.board = require('./board.model.js')(sequelize,Sequelize);

db.member.hasMany(db.board, { as : 'board', foreignKey : 'member_id'});
db.board.belongsTo(db.member, {foreignKey : 'member_id',as : 'member'});

module.exports = db;


