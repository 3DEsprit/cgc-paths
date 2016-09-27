var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');
/*eslint-disable no-console */

const app = express();

process.env.BABEL_ENV="production";

app.use(compression());
app.use(express.static('build'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(process.env.PORT || 3000, function(err) {
  if (err) console.log(err);
});
