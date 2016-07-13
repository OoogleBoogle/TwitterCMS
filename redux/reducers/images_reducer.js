let update = require('react-addons-update');

function imageReducer(state = [], action)  {
  let newState = null;
  switch (action.type) {
    case 'IMAGE_RECEIVED':
      newState = update(state, {
        $set: action.images
      })
      break;
    default:
  }
  return newState || state;
}

module.exports = {
  images: imageReducer
}
