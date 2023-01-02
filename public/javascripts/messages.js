const moment = require("moment");

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

module.exports = messages;
