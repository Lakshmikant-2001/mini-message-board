var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: '16mins ago'
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: '17mins ago'
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;
