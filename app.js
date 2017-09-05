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
