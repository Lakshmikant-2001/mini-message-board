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

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Message Board', formTitle: 'Add Message' })
})

module.exports = router;
