const express = require("express");
const app = express();
var path = require("path");

app.use(express.static("public"));

app.get("/page1", (req, res) => {
  res.redirect("/page1.html");
});

app.get("/page2", (req, res) => {
  res.redirect("/page2.html");
});

app.listen(3000);
