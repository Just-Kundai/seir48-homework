const express = require('express');
const ejs = require('ejs');
const imagesearch = require('imagesearch');
const axios = require("axios);

const server = express();
server.set('view-engine', ejs);
const PORT = 1337; // could be any number higher than 1024
const APIKEY = '2f5ac274ecfac5a455f38745704ad084';

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
  booksearch.getImage({ kind: req.query.symbol }).then((result) => {
    console.log(result);
    res.render('info.ejs', { authors: result.close, title: req.query.symbol });
  });
});

server.listen(PORT, () => console.log(`Server running: http://localhost:${ PORT }`));
