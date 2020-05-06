var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();




router.get('/', function(req, res, next) {

    res.sendFile('E:/NodeJS/football/feedback.html');

});

module.exports = router;