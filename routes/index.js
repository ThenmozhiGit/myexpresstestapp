var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Test Express Application on Heroku - Nodemon' });
  res.redirect('/dashboard');
});

module.exports = router;
