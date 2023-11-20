const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'music_db',
    user: 'root',
    password: '13235950699a'
});

const statement = 'select * from `products` limit 5 offset 0;';

connection.query(statement, (err, res, fields) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res, fields);
});