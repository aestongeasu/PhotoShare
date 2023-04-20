var express = require('express')
var connection = require('./database.js')
var router = express.Router()

router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM Albums', function (err, rows) {
    if (err) {
      req.flash('error', err)
      res.render('index', { data: '' })
    } else {
      res.render('index', { data: rows })
    }
  })
  console.log('sent');
})
module.exports = router
