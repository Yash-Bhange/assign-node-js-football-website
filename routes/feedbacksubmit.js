var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var feedsubmit = require('../models/feedsubmit');
var router = express.Router();



router.post('/', function(req, res, next) {

    console.log(req.body.username);

    feedsubmit.create({
            'name': req.body.username,
            'email': req.body.useremail,
            'desc': req.body.userfeedback
        })
        .then((temp) => {
            console.log(temp);
            res.sendFile('E:/NodeJS/football/index.html');

        })
        .catch((err) => {
            console.log(err);
            next(err);
        });


});
module.exports = router;