var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('screen', { title: 'Capture - Trace', description: 'Take a website screenshot without entering website.' }); 
});

module.exports = router;
