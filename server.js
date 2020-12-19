const express = require('express')
const app = express();

var PORT = process.env.PORT || 3001;
 
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/test', function (req, res) {
  res.send('Hello Test World');
})
 
app.listen( PORT );