var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dev', { title: 'Developer - Trace', description: 'Trace developer sajad pp.' }); 
});

module.exports = router;
