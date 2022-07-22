app = require("express");

app.get("/", (req, res) => {
  res.send("Welcome to furniture API!");
});
