var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('short', { title: 'Url shorter - Trace', description: 'Short you long url to small.' }); 
});

module.exports = router;
