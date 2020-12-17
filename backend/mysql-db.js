const mariadb = require('mysql');
const connection = mariadb.createConnection({
    host : 'mariadb',
    port : 3306,
    user : 'root',
    password : '1234',
    database : 'user'
});

module.exports = connection;