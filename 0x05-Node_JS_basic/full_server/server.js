// full_server/server.js
const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 1245;

app.use(routes);

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
