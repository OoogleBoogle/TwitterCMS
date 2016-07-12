const bandsRef = require('../../lib/firebase').bandsRef;

module.exports = {
  listenForBands: () => {
    return function(dispatch) {
      bandsRef.on("value", (snapshot) => {
        return dispatch({
          type: 'BAND_RECEIVED',
          data: snapshot.val()
        })
      })
    }
  }
}
