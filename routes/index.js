var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('pages/index', {
		title: 'Express'
	});
});

router.get('/login', function (req, res) {
	res.render('pages/login');
});

router.get('/testing', function (req, res) {
	res.render('pages/testing');
});

router.get('/testLogin', function (req, res) {
	res.render('pages/testLogin');
});

router.get('/testJson', function (req, res) {
	res.render('pages/testCreateJson');
});

module.exports = router;
