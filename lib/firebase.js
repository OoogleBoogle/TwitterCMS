var Firebase = require('firebase');

if (process.env.NODE_ENV !== "production") {
  var secrets = require('../secrets');
}
console.log(process.env.FB_apiKey);
// Set Up firebase...
Firebase.initializeApp({
  apiKey: process.env.FB_apiKey || secrets.FB_apiKey,
  authDomain: process.env.FB_authDomain || secrets.FB_authDomain,
  databaseURL: process.env.FB_databaseURL || secrets.FB_databaseURL,
  storageBucket: process.env.FB_storageBucket || secrets.FB_storageBucket,
});

const db = Firebase.database();

function dbRef(type, ref) {
  if (type === 'post') {
    switch (ref.name) {
      case "bands":
        db.ref('/bands/' + ref.id).set(ref.data);
        break;
      case "images":
        db.ref('/images/' + ref.id).set(ref.data);
        break;
      case "updates":
        db.ref('/updates/' + ref.id).set(ref.data);
        break;
      default:
        console.log('Unknown Ref');
    }
  }
  else if (type === 'del') {
    db.ref('/updates/' + ref).once('value').then(function(snap) {
      if (snap.exists()) {
        console.log('in update');
        db.ref('/updates/' + ref).remove();
      }
    })
    db.ref('/bands/' + ref).once('value').then(function(snap) {
      if (snap.exists()) {
        console.log('in band');
        db.ref('/bands/' + ref).remove();
      }
    });
    db.ref('/images/' + ref).once('value').then(function(snap) {
      if (snap.exists()) {
        console.log('in image');
        db.ref('/images/' + ref).remove();
      }
    });
  }
}

// Export the refs to DB endpoint for user around the app.
// If you're new to firebase, you can think of these endpoints as Mongo Collections
exports.userRef = db.ref('/user');
exports.dbRef = dbRef;
