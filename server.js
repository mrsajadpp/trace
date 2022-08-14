let express = require('express');
let { engine }  = require('express-handlebars');
let app = express();
let path = require('path');
let fs = require('fs');
let { index, short, shorting, data} = require('./routes/routes.js');

data(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', engine({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

index(express, app, fs, path,);
short(express, app, fs, path,);
shorting(express, app, fs, path,);

/*function runner(number) {
  run(express, app, fs, path, number);
}*/

function listen(port) {
  app.listen(port, () => {
    console.log('Server is running on port : '+port);
  });
}

module.exports = { 
  listen
};