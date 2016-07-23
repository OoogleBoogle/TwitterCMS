import React, { Component } from 'react'
import { connect } from 'react-redux';

const twitterLogo = require('../img/twitterlogolarge.png');

class User extends Component {
  render() {
    return (
      <div className="user-component">
        <div className="banner">
          <h1>Twitter Streaming CMS</h1>
          <img src={twitterLogo} />
          <p>The content below is pulled from a Twitter account and is updated in real time based on specific hashtags.</p>
        </div>
        <div className="user-info">
          <img src={this.props.state.image} alt="profile image"/>
          <h5>{this.props.state.name}</h5>
          <p>{this.props.state.description}</p>
          <p>{this.props.state.location}</p>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  return {
    state: state.user
  };
};

const Container = connect(mapStateToProps)(User);

export default Container;
