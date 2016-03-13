var User = require('../models/user')
// var passport = require('passport')
// var Strategy = require('passport-local').Strategy


exports.showSignup = function (req, res) {
  res.render("sessions/showSignup")
}

exports.signup = function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.register( new User({username: username}), password,
   function (err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }
    req.flash('info', "注册成功，请登录")
    res.redirect('/login')
    // res.render("sessions/new")
  })
}

exports.showLogin = function (req, res) {
  res.render("sessions/showLogin", {info: req.flash('info')})
}


exports.login = function (req, res, next) {
  res.redirect('/');
}