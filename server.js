var express = require('express'),
    app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('server started on localhost:3000');
});