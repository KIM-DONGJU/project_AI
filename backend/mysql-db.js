const mariadb = require('mysql');
const connection = mariadb.createConnection({
<<<<<<< HEAD
    host : 'localhost',
=======
    host : 'mariadb',
>>>>>>> abaebf80c14a8fbb55cddfed355d9fe85b83c0af
    port : 3306,
    user : 'root',
    password : 'cjsend12',
    database : 'user'
});

module.exports = connection;