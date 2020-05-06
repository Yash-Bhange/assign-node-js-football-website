var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
var achsm = require('../models/achivement');




router.get('/', function(req, res, next) {
    achsm.find({})
        .then((achivements) => {
            if (!achivements) {
                console.log("no achivements to show");
                res.sendFile('E:/NodeJS/football/achivement.html');
            } else {
                console.log(achivements);
                res.sendFile('E:/NodeJS/football/achivement.html', achivements);
            }

        })
        .catch((err => {
            next(err);
        }));



});

module.exports = router;