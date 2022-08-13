var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home - Trace', description: 'Generate your own qr, Capture a website with url, Short your links - Trace' }); 
});

module.exports = router;
