//const { runner } = require('../server.js');
const short = require('./short.js');
const codes = require('../redirect/url.js');
function rand(url, out, run) { 
    var digits = '0123456789'; 
    let number = '';
    for (let i = 0; i < 6; i++ ) { 
        number += digits[Math.floor(Math.random() * 10)]; 
    }
    for (let i = 0; i < codes.length; i++) {
      if (!url) {
        out('short');
      } else {
      if (codes[i] === number) {
        rand(url, out);
      } else {
        codes.push(number);
        run(number);
        short(url, number);
        out(number);
        return number;
      }
      }
    }
} 
module.exports = rand;
