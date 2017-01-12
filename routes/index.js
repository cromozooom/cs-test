var express = require('express');
var router = express.Router();

var corporateJson = require('../data/corporate.json');
var activeTradeJson = require('../data/activeTrade.json');
var notesJson = require('../data/notes.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  var corporateData     = corporateJson.corporate;
  var activeTradeData   = activeTradeJson.activeTrade;
  var notesData         = notesJson.notes;
  //console.log(notesData[1].notesdatemonth);

  res.render('index', {
    corporate:          corporateData,
    activeTrade:        activeTradeData,
    notes:              notesData,
    title:              'Express'
  });
});

module.exports = router;
