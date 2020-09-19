var express = require('express');
var favicon = require('serve-favicon')
var router = express.Router();

// load names.json file
let name_data = require('../names.json');

express().use(favicon('./public/images/favicon.ico'))

// parse names.json file for name primitives, generate three-part name
function makeName(name_list) {
  if (Math.floor(Math.random() * 100) == 1) {
    return "Bob Johnson!";
  } else { 
    var first = name_list.first;
    var lastone = name_list.lastone;
    var lasttwo = name_list.lasttwo;

    var rfi = Math.floor(Math.random()*first.length);
    var rlo = Math.floor(Math.random()*lastone.length);
    var rlt = Math.floor(Math.random()*lasttwo.length);


    if (Math.floor(Math.random() * 20) == 1) {
      return `${first[rfi]} Mc${lastone[rlo]}${lasttwo[rlt]}!`;
    } else {
      return `${first[rfi]} ${lastone[rlo]}${lasttwo[rlt]}!`;
    }
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(name_data);
  var name = makeName(name_data);
  res.render('index', { title: name });
  next();
});

module.exports = router;
