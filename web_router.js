var express = require('express');
var sessions = require('./controllers/sessions')
var router = express.Router();

router.get('/signup', sessions.new)
// router.get('sign_in', )

module.exports = router;