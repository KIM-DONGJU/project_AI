const mariadb = require('mysql');
const connection = mariadb.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'cjsend12',
    database : 'user'
});

module.exports = connection;