const fs = require('fs');
const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const DUPLICATE_RECORD_ERROR = 11000;

const Magic_cards = require("./models/magic_cards.js");

const mongoURL = 'mongodb://localhost:27017/newdb';
mongoose.connect(mongoURL, {useMongoClient: true});
mongoose.Promise = require('bluebird');

app.use(bodyParser.urlencoded({ extended:true }));

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/add', function(req, res){
  res.render('add');
});

app.post('/add', function(req, res){
  Magic_cards.create.(req.body).then(function(magic_cards){
    res.redirect('/');
  });
});

app.get('/:id', function(req, res) {
 Magic_cards.find({
  _id: req.params.id
}).then(function(magic_cards) {
  res.render('id', {magic_cards: magic_cards});
 });
});

app.post('/:id', function(req, res) {
 Magic_cards.findByIdAndRemove({
  _id: req.params.id
}).then(function(magic_cards) {
  res.redirect('/');
});
});


app.get('/:id/edit', function(req, res) {
 Books.find({
  _id: req.params.id
}).then(function(magic_cards) {
  res.render('edit', {magic_cards: magic_cards});
 });
});

app.post('/:id/edit', function(req, res) {
 Magic_cards.findOneAndUpdate({
  _id: req.params.id
}, req.body).then(function(magic_cards) {
  res.redirect('/')
 });
});


app.get('/', function(req, res){
  Magic_cards.find().then function(magic_cards) {
    res.render('index', {
      magic_cards: magic_cards
    });
  });
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
