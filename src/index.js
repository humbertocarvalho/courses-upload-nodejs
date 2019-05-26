require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

/**
 * Database setup
 */

mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(morgan('dev'));
app.use(require('./routes'));

app.listen(3000);
