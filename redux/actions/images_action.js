const imagesRef = require('../../lib/firebase').imagesRef;

module.exports = {
  listenForImages: () => {
    return function(dispatch) {
      imagesRef.on("value", (snapshot) => {
        var promise = new Promise((res, rej) => {
          let toSend = [];
          let data = snapshot.val();
          for (let obj in data) {
            let info = {
              src: data[obj].image,
              description: data[obj].description
            }
            toSend.push(info);
          }
          res(toSend);
        }).then(images => {
          return dispatch({
            type: 'IMAGE_RECEIVED',
            images: images
          })
        })
      })
    }
  }
}
