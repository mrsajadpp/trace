const express = require('express');
let app = express();
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images/logo.png')));
let codes = require('./redirect/url.js');
function listen(port) {
  app.listen(port, () => {
    console.log('Rediarect running on : '+port);
  });
}
//Redirecting 
function run(number) {
    app.get('/u/'+number, (req, res) => {
      res.status(200).sendFile(path.join(__dirname, 'redirect/'+number+'.html'));
    });
}
const port = 3002;
listen(port);

module.exports = { 
  listen,
  run
};