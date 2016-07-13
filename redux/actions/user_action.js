const userRef = require('../../lib/firebase').userRef;

module.exports = {
  listenForNewUser: () => {
    return function(dispatch) {
      userRef.on("value", (snapshot) => {
        let promise = new Promise((res, rej) => {
          let newDetails = {
            name: snapshot.val().name,
            description: snapshot.val().description,
            image: snapshot.val().image,
            location: snapshot.val().location
          };
          res(newDetails);
        }).then(user => {
          return dispatch({
            type: 'NEW_USER_RECEIVED',
            user: user
          })
        })
      })
    }
  }
}
