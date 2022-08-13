var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('qr', { title: 'Qr code generator - Trace', description: 'Generate your own all qr code for free.' }); 
});

module.exports = router;
