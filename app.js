const express = require("express");

const app = express();

const server = app.listen(8080, () => {
  console.log("Listening to port 8080.");
});

module.exports = server;
