var express = require('express');
var router = express.Router();
var webController = require('../controllers/webController');

/* GET home page. */
router.get('/', webController.Scraper);

module.exports = router;
