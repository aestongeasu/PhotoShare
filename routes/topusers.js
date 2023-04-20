var express = require('express');
var router = express.Router();
var connection = require('./database.js')

/* GET Top Users page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT firstName, lastName, contributionScore FROM users ORDER BY contributionScore DESC LIMIT 10', function (err, rows) {
    if (err) {
      req.flash('error', err)
      res.render('topusers', {title: 'Top Users', data: '' })
    } else {
      res.render('topusers', {title: 'Top Users', data: rows })
    }
  })        
});

module.exports = router