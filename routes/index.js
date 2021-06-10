// https://auth0.com/docs/quickstart/webapp/nodejs

var express = require('express');
var router = express.Router();

// Initial captcha input page. Displays error if user inputs the wrong answer for Captcha
router.get('/', function (req, res, next) {
    if (req.session.error === undefined) {
        res.render('index', { title: 'Coffee Teapots'});
    } else {
        errorMsg = req.session.error;
        delete req.session.error;
        res.render('index', { title: 'Coffee Teapots', error: errorMsg });
    }

});

module.exports = router;