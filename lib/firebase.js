var Firebase = require('firebase');

if (process.env.NODE_ENV === undefined) {
  var secrets = require('../secrets');
}

// Set Up firebase...
Firebase.initializeApp({
  apiKey: process.env.FB_apiKey || secrets.FB_apiKey,
  authDomain: process.env.FB_authDomain || secrets.FB_authDomain,
  databaseURL: process.env.FB_databaseURL || secrets.FB_databaseURL,
  storageBucket: process.env.FB_storageBucket || secrets.FB_storageBucket,
});

const db = Firebase.database();

// Export the refs to DB endpoints for use around the app.
// If you're new to firebase, you can think of these endpoints as Mongo Collections
exports.bandsRef = db.ref('/bands');
exports.userRef = db.ref('/user');
exports.imagesRef = db.ref('/images');
exports.updateRef = db.ref('/updates');
