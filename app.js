const express = require("express");
app = express();
app.get("/", function (req, res) {
  res.send("Запрос пришел!");
});
app.post("/", function (req, res) {
  res.send("Запрос пришел в посылке!");
});
app.listen("3000", function () {
  console.log("listening on", 3000);
});
