var userRef = require('./firebase').userRef;

var dbRef = require('./firebase').dbRef;

if (process.env.NODE_ENV !== "production") {
  var secrets = require('../secrets');
}

module.exports = (Twit) => {
  // Set up twitter stream using Twit from npm
  var T = new Twit({
    consumer_key: process.env.T_consumer_key || secrets.T_consumer_key,
    consumer_secret: process.env.T_consumer_secret || secrets.T_consumer_secret,
    access_token: process.env.T_access_token || secrets.T_access_token,
    access_token_secret: process.env.T_access_token_secret || secrets.T_access_token_secret
  })

  // Set up streaming API to listen for new tweets
  var stream = T.stream('user');

  stream.on('connected', function(res) {
    console.log('connected to twitter');
  });

  stream.on('connect', () => {
    console.log('attempting connect');
  })

  stream.on('disconnect', function(message) {
    console.log(message);
  });



  // TODO: Add more flexability...allow multiple hashtags and urls
  // TODO: Fire off a DM to the user if hashtag not found
  stream.on('tweet', function(tweet) {
    let bands, updates, images;
    console.log(tweet);
    // TODO: Update user only when twitter profile changed
    user = {
      name: tweet.user.name,
      location: tweet.user.location,
      description: tweet.user.description,
      image: tweet.user.profile_image_url_https
    }
    userRef.set(user); // send to FB, overwrite existing.

    tweet.entities.hashtags.forEach(tag => {
      switch (tag.text) {
        // TODO: Find a way to set up real dates from tweets so they can be sorted on the front end
        case 'bands':
          var url = tweet.entities.urls[0] || {url: null}
          bands = {
            id: tweet.id_str,
            listing: cleanUp(tweet.text), // cleanUp() strips any links and hash tags from the tweet so the text can be clean.
            band_url: url.url
          };
          dbRef('post', {name: "bands", id: tweet.id_str, data: bands})
          break;
        case 'updates':
          updates = {
            id: tweet.id_str,
            update: cleanUp(tweet.text)
          };
          dbRef('post', {name: "updates", id: tweet.id_str, data: updates});
          break;
        case 'images':
          var url = tweet.entities.urls[0] || {expanded_url: null}
          images = {
            id: tweet.id_str,
            description: cleanUp(tweet.text),
            image: url.expanded_url
          };
          dbRef('post', {name: "images", id: tweet.id_str, data: images});
          break;
        default:
          console.log('Hashtag not found: ', tag.text);
      }
    });
  });

  stream.on('delete', function(tweet) {
    console.log(tweet);
    dbRef('del', tweet.delete.status.id_str);
  });

  // Function to strip links and hashtags from tweet
  function cleanUp(text) {
    return text.replace(/(http.*\s|#\S+)/g, '').trim();
  }
}
