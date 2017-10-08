const express = require('express');
const path = require('path');
const app = express();

const port = 3002;

app.use(express.static("assets"));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/index-components.html', function (req, res) {
  res.sendFile('index-components.html', { root: __dirname });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});