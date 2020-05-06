var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();




router.get('/', function(req, res, next) {

    res.sendFile('E:/NodeJS/football/about.html');

});

module.exports = router;