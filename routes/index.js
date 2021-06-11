// https://auth0.com/docs/quickstart/webapp/nodejs
const mongoose = require('mongoose');
var express = require('express');
const data = require('../database');
var router = express.Router();

// Initial captcha input page. Displays error if user inputs the wrong answer for Captcha
router.get('/', function (req, res, next) {
    var selectQuestion = Math.floor(Math.random() * 6);
    var randomQuestion = data[selectQuestion];

    if (req.session.error === undefined) {
        res.render('index', { title: 'Coffee Teapots', data: randomQuestion});
    } else {
        errorMsg = req.session.error;
        delete req.session.error;
        res.render('index', { title: 'Coffee Teapots', error: errorMsg, data: randomQuestion });
    }

});


// router.get('/:num_id', async (req, res) => { // GET specific id
//     try {
//         const captchaData = await Data.findById(req.params.id);
//         console.log(captchaData);
//         res.json(captchaData);
//     }
//     catch(err) {
//         res.send(err.message);
//     }
// }); 

module.exports = router;



