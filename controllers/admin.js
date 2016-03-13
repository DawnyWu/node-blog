var mongoose = require('mongoose')
var Blog =  require('../models/blog')
// var Blog = mongoose.model('blog')
var flash = require('connect-flash');


exports.login = function (req, res) {
  
  res.end('login')
}

