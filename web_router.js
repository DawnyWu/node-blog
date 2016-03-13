var express = require('express');
var sessions = require('./controllers/sessions')
var blogs = require('./controllers/blogs')
var admin = require('./controllers/admin')

var router = express.Router();

router.get('/signup', sessions.new)

router.get('/', blogs.index)
router.get('/blogs/new', blogs.new)
router.post('/blogs/create', blogs.create)

router.get('/admin', admin.login)
router.post('/admin/login', admin.login)


// router.get('sign_in', )

module.exports = router;