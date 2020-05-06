var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var contacts = require('../models/contact');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    contacts.findOne({ 'position': 'main' })
        .then((user) => {

            console.log(user.name);


            res.sendFile('E:/NodeJS/football/contact.html', user);
        })
        .catch((err) => {
            console.log(err);
        });

});

module.exports = router;