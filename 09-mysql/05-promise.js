const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'music_db',
    user: 'root',
    password: '13235950699a',
    connectionLimit: 10
});

const statement = 'select * from `products` where price > ?  limit 5 offset 0;';

connectionPool.promise().execute(statement, [5000]).then(([values, fields]) => {
    console.log(fields);
});