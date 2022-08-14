let fs = require('fs');
let path = require('path');
let app;
function data(ap) {
  app = ap;
}
const rand = require('../modules/randum.js');
let codes = require('../redirect/url.js');
function index(express, app, fs, path) {
  app.get('/', function(req, res) {
      res.render('index', { title: 'Home - Trace', description: 'Generate your own qr, Capture a website with url, Short your links - Trace' }); 
    });
}
function short(express, app, fs, path) {
    app.get('/short', function(req, res) {
      res.render('short', { title: 'Url shorter - Trace', description: 'Short you long url to small.' }); 
    });
  }
  function shorting(express, app, fs, path) {
    app.post('/shorting', function(req, res) {
    function out(number) {
       res.render('shorted', { title: 'Url shorter - Trace', description: 'Short you long url to small.', num: number });
    }
    let url = req.body.url;
    if (!url) {
       res.render('short', { title: 'Url shorter - Trace', description: 'Short you long url to small.'});
    } else {
      if (url.startsWith('http')) {
         rand(url, out, run);
      } else {
         rand('https://'+url, out, run);
      }
  }
 });
}
function robot(express, app, fs, path) {
  app.get('/robots.txt', function(req, res, next) {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow: /shorting \nAllow: / \nAllow: /qr \nAllow: /dev \nAllow: /about \nAllow: /screen \nAllow: /short"); 
  });
}
function sitemap(express, app, fs, path) {
  app.get('/sitemap.xml', function(req, res) {
    res.sendFile(path.join(__dirname,'/sitemap.xml'));
  });
}
function run(number) {
  app.get('/'+number, (req, res) => {
     res.sendFile(path.join(__dirname, '../redirect/'+number+'.html'));
  });
}
module.exports = {
  index,
  short,
  shorting,
  data,
  robot,
  sitemap
}