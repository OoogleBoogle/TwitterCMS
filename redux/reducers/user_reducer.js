let update = require('react-addons-update');

function userReducer(state = [], action)  {
  let newState = null;
  switch (action.type) {
    case 'NEW_USER_RECEIVED':
      newState = update(state, {
        $set: action.user
      })
      break;
    default:
  }
  return newState || state;
}


module.exports = {
  user: userReducer
}
