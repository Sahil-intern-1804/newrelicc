const express = require("express");
const app = express();
const newrelic = require("newrelic");
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});
app.get("/user", (req, res) => {
  res.send("Yepp im listening");
});
app.listen(8001, (res) => {
  console.log("Server is running on 8001");
});
