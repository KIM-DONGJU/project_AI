const mariadb = require('mysql');
const connection = mariadb.createConnection({
    host : 'localhost',
    port : 3307,
    user : 'root',
    password : '1234',
    database : 'user'
});

module.exports = connection;