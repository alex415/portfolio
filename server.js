var express = require('express'),
    app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.use(express.static(__dirname + '/public'));

app.use(redirectUnmatched);

function redirectUnmatched(req, res) {
  res.redirect('/');
}

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});