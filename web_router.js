var express = require('express');
var sessions = require('./controllers/sessions')
var blogs = require('./controllers/blogs')
var admin = require('./controllers/admin')
var passport = require('passport');
var router = express.Router();

router.get('/signup', sessions.showSignup)
router.post('/signup', sessions.signup)

router.get('/login', sessions.showLogin)

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});


// router.post('/login', function(req, res) {
//     res.redirect('/');
//   }
// );

router.get('/', blogs.index)
router.get('/blogs/new', blogs.new)
router.post('/blogs/create', blogs.create)

// router.post('/login', sessions.
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

// router.get('/admin', admin.login)
// router.post('/admin/login', admin.login)



// router.get('sign_in', )

module.exports = router;