var express = require('express'),
    app = express();
    Twit = require('twit'),
    secrets = require('./secrets');


// Allow CORS access for fetch
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./lib/twitter')(Twit);


app.get('*', function(req, res) {
  res.send('Hello World');
});


app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'),function() {
  console.log("Listening on Port " + app.get('port'));
});
