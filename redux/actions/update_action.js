const updateRef = require('../../lib/firebase').updateRef;

module.exports = {
  listenForUpdate: () => {
    return function(dispatch) {
      updateRef.on("value", (snapshot) => {
        return dispatch({
          type: 'UPDATE_RECEIVED',
          data: snapshot.val()
        })
      })
    }
  }
}
