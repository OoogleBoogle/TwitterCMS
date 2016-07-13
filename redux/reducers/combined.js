var combineReducers = require('redux').combineReducers;

var updates = require('./update_reducer').updates;
var bands = require('./band_reducer').bands;
var images = require('./images_reducer').images;
var user = require('./user_reducer').user;

var reducers = combineReducers({
  updates: updates,
	bands: bands,
  images: images,
  user: user
});

exports.reducers = reducers;
