var express = require('express'),
    app = express();
    Twit = require('twit'),
    Firebase = require('firebase'),
    secrets = require('./secrets');


// Allow CORS access for fetch
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set Up firebase...
Firebase.initializeApp({
  apiKey: secrets.FB_apiKey,
  authDomain: secrets.FB_authDomain,
  databaseURL: secrets.FB_databaseURL,
  storageBucket: secrets.FB_storageBucket,
});

const db = Firebase.database();

const bandsRef = db.ref('/bands');
const userRef = db.ref('/user');
const imagesRef = db.ref('/images');
const updateRef = db.ref('/updates');


// Set up twitter stream using Twit from npm
// TODO: Strip secret keys....
var T = new Twit({
  consumer_key: secrets.T_consumer_key,
  consumer_secret: secrets.T_consumer_secret,
  access_token: secrets.T_access_token,
  access_token_secret: secrets.T_access_token_secret
})

// Set up streaming API to listen for new tweets
var stream = T.stream('user');

// TODO: Perhaps this could work as an initial grab...reset the database?
stream.on('connected', function(res) {
  console.log('connected to twitter');
});

stream.on('disconnect', function(message) {
  console.log(message);
});


// TODO: Update user only when twitter profile changed
// TODO: Add more flexability...allow multiple hashtags and urls
stream.on('tweet', function(tweet) {
  let bands, updates, images, tweet_id = tweet.id;

  user = {
    name: tweet.user.name,
    location: tweet.user.location,
    description: tweet.user.description,
    image: tweet.user.profile_image_url_https
  }
  userRef.set(user);

  tweet.entities.hashtags.forEach(tag => {
    switch (tag.text) {
      // TODO: Find a way to set up real dates from tweets so they can be sorted on the front end
      case 'bands':
        bands = {
          listing: cleanUp(tweet.text),
          band_url: tweet.entities.urls[0].url
        };
        bandsRef.push(bands);
        break;
      case 'updates':
        updates = {
          update: cleanUp(tweet.text)
        };
        updateRef.push(updates);
        break;
      case 'images':
        images = {
          description: cleanUp(tweet.text),
          image: tweet.entities.urls[0].url
        };
        imagesRef.push(images);
        break;
      default:
        console.log('Hashtag not found: ', tag.text);
    }
  });
});

// Function to strip links and hashtags from tweet
function cleanUp(text) {
  return text.replace(/(http.*\s|#\S+)/g, '').trim();
}


app.get('*', function(req, res) {
  res.send('Hello World');
});


app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'),function() {
  console.log("Listening on Port " + app.get('port'));
});
