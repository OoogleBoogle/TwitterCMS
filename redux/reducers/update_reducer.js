let update = require('react-addons-update');

function updateReducer(state = [], action)  {
  let newState = null;
  switch (action.type) {
    case 'UPDATE_RECEIVED':
      let updateArray = [];
      for (let text in action.data) {
        updateArray.push(action.data[text].update);
      }
      newState = update(state, {
        $set: updateArray
      })
      break;
    default:
      console.log('Mama...it broke: ', action);
  }
  // console.log(newState);
  return newState || state;
}


module.exports = {
  update: updateReducer
}
