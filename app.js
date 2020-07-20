const express = require('express');
const { request, response } = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photo-gallery', (request, response) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.get('*', (request, response) => {
  response.send('Hello Word');
});

app.listen(3000);
