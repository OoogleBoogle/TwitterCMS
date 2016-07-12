let update = require('react-addons-update');

function bandReducer(state = [], action)  {
  let newState = null;
  switch (action.type) {
    case 'BAND_RECEIVED':
      let toPush = [];
      // TODO: this should probably be a promise...
      for (let obj in action.data) {
        let band = {
          link: action.data[obj].band_url,
          listing: action.data[obj].listing
        }
        toPush.push(band)
      }
      newState = update(state, {
        $set: toPush
      })
      break;
    default:
      console.log('Mama...it broke: ', action);
  }
  console.log("NS: ", newState);
  return newState || state;
}

module.exports = {
  band: bandReducer
}
