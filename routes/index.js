var express = require('express');
var router = express.Router();

// load names.json file
let name_data = require('../names.json');

// parse names.json file for name primitives, generate three-part name
function makeName(name_list) {
  var first = name_list.first;
  var lastone = name_list.lastone;
  var lasttwo = name_list.lasttwo;

  var rand_first = Math.floor(Math.random()*first.length)
  var rand_lastone = Math.floor(Math.random()*lastone.length)
  var rand_lasttwo = Math.floor(Math.random()*lasttwo.length)

  return `${first[rand_first]} ${lastone[rand_lastone]}${lasttwo[rand_lasttwo]}`
}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(name_data)
  var name = makeName(name_data)
  res.render('index', { title: name });
  next();
});

module.exports = router;
