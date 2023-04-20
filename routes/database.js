var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'photoshareapp412.mysql.database.azure.com',
  user: 'astonge', //
  password: 'Password!', //
  database: 'photoshare',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection;