var store = require('./store'),
    images = require('./actions/images_action'),
    bands = require('./actions/band_action'),
    updates = require('./actions/update_action');
    user = require('./actions/user_action');

store.dispatch(bands.listenForBands());
store.dispatch(images.listenForImages());
store.dispatch(updates.listenForUpdate());
store.dispatch(user.listenForNewUser());

// according to this....it takes no less then 1 second (even 900ms gives back nothing) to pull the data
// from the DB, organize it and save to state...could be a problem when there's a truck load of info.
let state;
setTimeout(() => {
  state = store.getState(),
  console.log(state);
}, 1000)
