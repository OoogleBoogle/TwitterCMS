import React from 'react';

const twitterLogo = require('../img/twitterlogolarge.png');

const Banner = () => {
  return <div className="banner">
           <h1>Twitter Streaming CMS</h1>
           <img src={twitterLogo} />
           <p>The content below is pulled from a Twitter account and is updated in real time based on specific hashtags.</p>
         </div>
}

export default Banner;