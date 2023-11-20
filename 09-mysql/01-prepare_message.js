const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '13235950699a',
  database: 'music_db'
})

const statement = `INSERT INTO products SET ?;`

const phoneJson = require('./phone.json')

for (let phone of phoneJson) {
  connection.query(statement, phone)
}