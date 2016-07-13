let update = require('react-addons-update');

function updateReducer(state = [], action)  {
  let newState = null;
  switch (action.type) {
    case 'UPDATE_RECEIVED':
      newState = update(state, {
        $set: action.updates
      })
      break;
    default:
  }
  return newState || state;
}


module.exports = {
  updates: updateReducer
}
