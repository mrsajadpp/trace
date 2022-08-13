var express = require('express');
var router = express.Router();
var path = require('path');
let codes = require('../redirect/url.js');

/* GET home page. */
function run() {
 for (let i = 0; i < codes.length; i++) {
  router.use('/'+codes[i], (req, res) => {
    console.log(req.url);
     res.sendFile(path.join(__dirname, '../redirect/'+codes[i]+'.html'));
  });
 } 
}
var x = 0;
function go() {
    run();
    if (x++ < 20) {
       setTimeout(go, 9000);
    }
}
go();

module.exports = router;
