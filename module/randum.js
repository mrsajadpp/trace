const short = require('./short.js');
const codes = require('../redirect/url.js');
var { connectDb, insertDb, collDb, findDb } = require('../db.js');
/*let ru = require('../app.js');*/

function rand(url, out) { 
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
        /*ru.runner(number);*/
        codes.push(number);
        //insertDb('paths', codes);
        short(url, number);
        out(number);
        return number;
      }
      }
    }
} 
module.exports = rand;