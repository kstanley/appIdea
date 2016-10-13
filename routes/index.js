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

module.exports = router;
