var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: /shorting \nAllow: / \nAllow: /qr \nAllow: /dev \nAllow: /about \nAllow: /screen \nAllow: /short"); 
});

module.exports = router;
