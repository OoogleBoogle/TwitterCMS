var express = require('express'),
    app = express();
    Twit = require('twit'),
    path = require('path');


// Allow CORS access for fetch
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let indexPage = path.join(__dirname, 'dist/index.html');
app.use(express.static(path.join(__dirname, 'dist')));

require('./lib/twitter')(Twit);

app.get('/*', function(req, res) {
  res.sendFile(indexPage);
});


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),function() {
  console.log("Listening on Port " + app.get('port'));
});
