const bandsRef = require('../../lib/firebase').bandsRef;

module.exports = {
  listenForBands: () => {
    return function(dispatch) {
      bandsRef.on("value", (snapshot) => {
        let promise = new Promise((res, rej) => {
          let toPush = [];
          let data = snapshot.val();
          for (let obj in data) {
            let band = {
              link: data[obj].band_url,
              listing: data[obj].listing
            }
            toPush.push(band)
          }
          res(toPush);
        }).then(bands => {
          return dispatch({
            type: 'BAND_RECEIVED',
            bands: bands
          })
        })
      })
    }
  }
}
