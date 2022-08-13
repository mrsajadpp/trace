const short = require('./short.js');
const codes = require('../redirect/url.js');
const run = require('../server.js');
function rand(url, out) { 
    var digits = '0123456789'; 
    let number = ''; 
    for (let i = 0; i < 6; i++ ) { 
        number += digits[Math.floor(Math.random() * 10)]; 
    }
    for (let i = 0; i < codes.length; i++) {
      if (codes[i] == number) {
        rand();
      } else {
        codes.push(number);
        run();
        short(url, number);
        out(number);
        return number;
      }
    }
} 
module.exports = rand;
