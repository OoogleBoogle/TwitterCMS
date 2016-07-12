var secrets = require('../secrets'),
    Firebase = require('firebase');

// Set Up firebase...
Firebase.initializeApp({
  apiKey: secrets.FB_apiKey,
  authDomain: secrets.FB_authDomain,
  databaseURL: secrets.FB_databaseURL,
  storageBucket: secrets.FB_storageBucket,
});

const db = Firebase.database();

exports.bandsRef = db.ref('/bands');
exports.userRef = db.ref('/user');
exports.imagesRef = db.ref('/images');
exports.updateRef = db.ref('/updates');
