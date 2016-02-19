var Alt = require("alt");
var alt = new Alt();

alt.dispatcher.register(console.log.bind(console));

module.exports = alt;