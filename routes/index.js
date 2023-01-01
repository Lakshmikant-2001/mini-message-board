var express = require("express");
const moment = require("moment");
const { body, validationResult } = require("express-validator");

var router = express.Router();

const messages = [
  {
    text: "Happy New year!",
    user: "LK",
    added: moment().startOf("year"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment().startOf("week"),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board", formTitle: "Add Message" });
});

router.post(
  "/new",
  body("text", "Message/text field is empty").trim().isLength({ min: 1 }),
  body("user", "User field is empty").trim().isLength({ min: 1 }),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("form", {
        title: "Mini Message Board",
        formTitle: "Add Message",
        errors: errors.array(),
      });
    } else {
      const { text, user } = req.body;
      messages.push({ text, user, added: moment() });
      res.redirect("/");
    }
  }
);

module.exports = router;
