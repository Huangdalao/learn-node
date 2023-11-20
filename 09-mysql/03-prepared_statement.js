const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'music_db',
    user: 'root',
    password: '13235950699a'
});

const statement = 'select * from `products` where price > ?  limit 5 offset 0;';

connection.execute(statement, [5000], (err, values) => {
    console.log('values: ', values);
    connection.destroy();
});