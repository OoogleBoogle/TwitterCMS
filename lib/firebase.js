var Firebase = require('firebase');

if (process.env.NODE_ENV !== "production") {
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
// exports.bandsRef = db.ref('/bands');
exports.userRef = db.ref('/user');
// exports.imagesRef = db.ref('/images');
// exports.updateRef = db.ref('/updates');

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
    console.log("looking for: ", ref);
    db.ref('/updates/' + ref).once('value').then(function(snap) {
        console.log('in update 1');
      if (snap.child(ref + '/id').exists()) {
        console.log('in update');
        db.ref('/updates/' + ref).remove();
      }
    })
    db.ref('/band/' + ref).once('value').then(function(snap) {
        console.log('in band 1');
      if (snap.child(ref + '/id').exists()) {
        console.log('in band');
        db.ref('/bands/' + ref).remove();
      }
    });
    db.ref('/images/' + ref).once('value').then(function(snap) {
        console.log('in image 1');
      if (snap.child(ref + '/id').exists()) {
        console.log('in image');
        db.ref('/images/' + ref).remove();
      }
    });
    //   console.log('in del updates', db.ref('/updates/' + ref));
    //   db.ref('/updates/' + ref).remove();
    // }
    // else if (db.ref('/images/' + ref).exists()) {
    //   console.log('in img del');
    //   db.ref('/images/' + ref).remove()
    // }
    // else if (db.ref('/bands/' + ref).exists()) {
    //   console.log('in del bands removing: ' + ref);
    //   db.ref('/bands/' + ref).remove();
    // }
    // else {
    //   console.log('del ref not found');
    // }
  }
}

exports.dbRef = dbRef;
