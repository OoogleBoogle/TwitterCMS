import React, { Component } from 'react'
import { connect } from 'react-redux';

class User extends Component {
  render() {
    return (
      <div className="user-component">
        <h1>The following info comes from Twitter</h1>
        <p>{this.props.state.name}</p>
        <p>{this.props.state.description}</p>
        <img src={this.props.state.image} alt="profile image"/>
        <p>{this.props.state.location}</p>
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
