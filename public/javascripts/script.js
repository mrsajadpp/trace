//Menu
let menuBar = document.getElementById('menuBar');
function menu() {
  let menuIcon = document.getElementById('menuIcon');
  menuBar.classList.toggle('hide');
  menuIcon.classList.toggle('bx-menu-alt-left');
  menuIcon.classList.toggle('bx-menu');
}
//Forward
if (localStorage.getItem('url') && localStorage.getItem('th')) {
  let th = document.getElementById(localStorage.getItem('th'));
  th.classList.add('th');
  //localStorage.clear();
}
function load(url, th) {
  let bar = document.getElementById(th);
  let home = document.getElementById('home');
  let short = document.getElementById('shorter');
  let qr = document.getElementById('qr');
  let capture = document.getElementById('capture');
  let dev = document.getElementById('dev');
  let about = document.getElementById('about');
  if (url === '/') {
    home.classList.add('th');
    short.classList.remove('th');
    qr.classList.remove('th');
    capture.classList.remove('th');
    dev.classList.remove('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
    setTimeout(function() {
      menuBar.classList.toggle('hide');
    }, 700);
  } else if (url === '/short') {
    home.classList.remove('th');
    short.classList.add('th');
    qr.classList.remove('th');
    capture.classList.remove('th');
    dev.classList.remove('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
    setTimeout(function() {
      menuBar.classList.toggle('hide');
    }, 700);
  } else if (url === '/qr') {
    home.classList.remove('th');
    short.classList.remove('th');
    qr.classList.add('th');
    capture.classList.remove('th');
    dev.classList.remove('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
    setTimeout(function() {
      menuBar.classList.toggle('hide');
    }, 700);
  } else if (url === '/screen') {
    home.classList.remove('th');
    short.classList.remove('th');
    qr.classList.remove('th');
    capture.classList.add('th');
    dev.classList.remove('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
    setTimeout(function() {
      menuBar.classList.toggle('hide');
    }, 700);
  } else if (url === '/dev') {
    home.classList.remove('th');
    short.classList.remove('th');
    qr.classList.remove('th');
    capture.classList.remove('th');
    dev.classList.add('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
    setTimeout(function() {
      menuBar.classList.toggle('hide');
    }, 700);
  } else if (url === '/about') {
    home.classList.remove('th');
    short.classList.remove('th');
    qr.classList.remove('th');
    capture.classList.remove('th');
    dev.classList.remove('th');
    about.classList.add('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
    setTimeout(function() {
      menuBar.classList.toggle('hide');
    }, 700);
  }
}

if (location.href === 'https://trace.sajadpp.repl.co/') {
    home.classList.add('th');
    short.classList.add('th');
    qr.classList.remove('th');
    capture.classList.remove('th');
    dev.classList.remove('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
  } else if (location.href === 'https://trace.sajadpp.repl.co/short') {
    home.classList.remove('th');
    short.classList.add('th');
    qr.classList.remove('th');
    capture.classList.remove('th');
    dev.classList.remove('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
  } else if (location.href === 'https://trace.sajadpp.repl.co/qr') {
    home.classList.remove('th');
    short.classList.add('th');
    qr.classList.add('th');
    capture.classList.remove('th');
    dev.classList.remove('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
  } else if (location.href === 'https://trace.sajadpp.repl.co/screen') {
    home.classList.remove('th');
    short.classList.add('th');
    qr.classList.add('th');
    capture.classList.add('th');
    dev.classList.remove('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
  } else if (location.href === 'https://trace.sajadpp.repl.co/dev') {
    home.classList.remove('th');
    short.classList.add('th');
    qr.classList.add('th');
    capture.classList.add('th');
    dev.classList.add('th');
    about.classList.remove('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
  } else if (location.href === 'https://trace.sajadpp.repl.co/about') {
    home.classList.remove('th');
    short.classList.add('th');
    qr.classList.add('th');
    capture.classList.add('th');
    dev.classList.add('th');
    about.classList.add('th');
    location.href = url;
    localStorage.setItem('url',url);
    localStorage.setItem('th',th);
  }