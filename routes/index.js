var express = require("express");
const moment = require("moment");
const { body, validationResult } = require("express-validator");
const messages = require("../public/javascripts/messages");

var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New message", formTitle: "Add Message" });
});

router.post(
  "/new",
  body("text", "Message/text field is empty").trim().isLength({ min: 1 }),
  body("user", "User field is empty").trim().isLength({ min: 1 }),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("form", {
        title: "New message errors",
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
