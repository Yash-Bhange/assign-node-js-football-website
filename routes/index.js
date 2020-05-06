var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('E:/NodeJS/football/index.html');

});

module.exports = router;