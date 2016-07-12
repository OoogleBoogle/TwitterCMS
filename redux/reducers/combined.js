var combineReducers = require('redux').combineReducers;

var update = require('./update_reducer').update;
var band = require('./band_reducer').band;

var reducers = combineReducers({
  update: update,
	band: band
});

exports.reducers = reducers;
