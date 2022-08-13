var express = require('express');
var router = express.Router();
const short = require('../module/short.js');
const rand = require('../module/randum.js');
let codes = require('../redirect/url.js');

router.post('/', function(req, res, next) {
  function out(number) {
    res.render('shorted', { title: 'Url shorter - Trace', description: 'Short you long url to small.', num: number });
  }
  let url = req.body.url;
  if (!url) {
    res.render('short', { title: 'Url shorter - Trace', description: 'Short you long url to small.'});
  } else {
    if (url.startsWith('http')) {
       rand(url, out);
    } else {
       rand('https://'+url, out);
    }
  }
});

module.exports = router;