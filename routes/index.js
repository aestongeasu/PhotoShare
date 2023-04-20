var express = require('express');
var router = express.Router();
var connection = require('./database.js')

/* GET home page. */
router.get('/', function(req, res, next) {
      
  //res.render('index', {title: 'PhotoShare'}); 
  connection.query('SELECT * FROM Albums', function (err, rows) {
    if (err) {
      req.flash('error', err)
      res.render('index', { title: 'PhotoShare',data: '' })
    } else {
      res.render('index', { title: 'PhotoShare', data: rows })
    }
  })   
});
 module.exports = router;


