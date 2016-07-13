var store = require('../store'),
    images = require('./images_action'),
    bands = require('./band_action'),
    updates = require('./update_action'),
    user = require('./user_action');

function startAllActions() {
  store.dispatch(bands.listenForBands());
  store.dispatch(images.listenForImages());
  store.dispatch(updates.listenForUpdate());
  store.dispatch(user.listenForNewUser());
}

exports.startAllActions = startAllActions;
