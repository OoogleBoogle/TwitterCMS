const updateRef = require('../../lib/firebase').updateRef;

module.exports = {
  listenForUpdate: () => {
    return function(dispatch) {
      updateRef.on("value", (snapshot) => {
        let promise = new Promise((res, rej) => {
          let updateArray = [];
          let data = snapshot.val();
          for (let text in data) {
            updateArray.unshift(data[text].update);
          }
          res(updateArray);
        }).then(updates => {
          return dispatch({
            type: 'UPDATE_RECEIVED',
            updates: updates
          })
        })
      })
    }
  }
}
