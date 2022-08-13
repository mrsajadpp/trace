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
function run() {
  for (let i = 0; i < codes.length; i++) {
    app.get('/'+codes[i], (req, res) => {
      res.status(200).sendFile(path.join(__dirname, 'redirect/'+codes[i]+'.html'));
    });
  }
}
const port = 3002;
listen(port);

module.exports = listen;
module.exports = run;
