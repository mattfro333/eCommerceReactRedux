"use strict"
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost:27017/books',
{ useUnifiedTopology: true,
  useNewUrlParser: true  }
);
Books = require('./models/books.js');
var app = express();
// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in/public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:
false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var Books = require('./models/books.js');
//---->>> POST BOOKS <<<-----
app.post('/books', function(req, res){
 var book = req.body;
 Books.create(book, function(err, books){
 if(err){
 throw err;
 }
 res.json(books);
 })
});
//----->>>> GET BOOKS <<<---------
app.get('/books', function(req, res){
 Books.find(function(err, books){
 if(err){
 throw err;
 }
 res.json(books)
 })
});
//---->>> DELETE BOOKS <<<------
app.delete('/books/:_id', function(req, res){
 var query = {_id: req.params._id};
 Books.remove(query, function(err, books){
 if(err){
 throw err;
 }
 res.json(books);
 })
});
//---->>> UPDATE BOOKS <<<------
app.put('/books/:_id', function(req, res){
 var book = req.body;
 var query = req.params._id;
 // if the field doesn't exist $set will set a new field
 var update = {
 '$set':{
 title:book.title,
 description:book.description,
 image:book.image,
 price:book.price
 }
 };
 // When true returns the updated document
 var options = {new: true};
 Books.findOneAndUpdate(query, update,
options, function(err, books){
 if(err){
 throw err;
 }
 res.json(books);
 })
})
promise.then(function(db) {
Books
});
// END APIs
app.listen(3001, function(err){
 if(err){
 return console.log(err);
 }
 console.log('API Server is listening on 3001');
});
