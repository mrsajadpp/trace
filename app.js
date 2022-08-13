var createError = require('http-errors');
var express = require('express');
var { engine, create } = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
const listen = require('./server');

var indexRouter = require('./routes/index');
var devRouter = require('./routes/dev');
var aboutRouter = require('./routes/about');
var qrRouter = require('./routes/qr');
var shortRouter = require('./routes/short');
var shortingRouter = require('./routes/shorting');
var screenRouter = require('./routes/screen');
var robotRouter = require('./routes/robots');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(favicon(path.join(__dirname, 'public', 'images/logo.png')));
app.set('view engine', 'hbs');
app.engine('hbs', engine({extname: 'hbs', defualtLayout : 'layouts' , layoutsDir:  __dirname + '/views/layouts' , partialsDir: __dirname+'/views/partials'}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dev', devRouter);
app.use('/about', aboutRouter);
app.use('/qr', qrRouter);
app.use('/short', shortRouter);
app.use('/shorting', shortingRouter);
app.use('/screen', screenRouter);
app.use('/robots.txt', robotRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
