var mongoose = require('mongoose')
var Blog =  require('../models/blog')
var nconf = require('nconf')
// var Blog = mongoose.model('blog')
var flash = require('connect-flash');


exports.index = function (req, res) {
  console.log(req.user)
  console.log(req.session)
  // res.locals.current_user = "hello"
  Blog.find({}).skip(2).limit(10).then(function (blogs) {
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
}

exports.blogs = function (req, res) {
  var pageNumber = req.query.page
  console.log(nconf.get('perPage'))
  Blog.findByPage(pageNumber).then(function (blogs) {
    res.render("blogs/index", {blogs: blogs, info: ""})
  })
}

exports.pagination = function (req, res, next) {
  var perPage = nconf.get('perPage')

  Blog.countAsync({}).then(function (count) {
    var pagesCount = Math.ceil(count/perPage)
    res.locals.pagesCount = pagesCount
  })

  if (req.query.page === undefined ){
    res.locals.currentPage = 1 
  }else{
    res.locals.currentPage = parseInt(req.query.page)
  }
  next()
}
