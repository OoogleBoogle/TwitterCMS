import React, { Component } from 'react'
import { connect } from 'react-redux';
import Bands from './bands';
import Updates from './updates';
import Images from './images';
const twitterLogo = require('../img/twitterlogolarge.png');

class User extends Component {
  render() {
    return (
      <div className="user-component">
        <h1>Twitter Streaming CMS</h1>
        <img src={twitterLogo} />
        <p>{this.props.state.name}</p>
        <p>{this.props.state.description}</p>
        <img src={this.props.state.image} alt="profile image"/>
        <p>{this.props.state.location}</p>
        <Bands />
        <Updates />
        <Images />
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
