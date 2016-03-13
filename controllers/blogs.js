var mongoose = require('mongoose')
var Blog =  require('../models/blog')
// var Blog = mongoose.model('blog')
var flash = require('connect-flash');


exports.index = function (req, res) {
  console.log(req.user)
  Blog.find({}).then(function (blogs) {
    res.render("blogs/index", {blogs: blogs, info: req.flash('info')})
  })
}

exports.new = function (req, res) {
  res.render("blogs/new")
}

exports.create = function (req, res) {
  var title = req.body.title
  var content = req.body.content
  Blog.createAsync({title: title, content: content}).then(
    function () {
      req.flash('info', 'Flash is back!')
      res.redirect('/')
    }
  )
  
  // res.render("sessions/new")
}