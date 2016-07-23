import React, { Component } from 'react'
import { connect } from 'react-redux';

class User extends Component {
  render() {
    return (
      <div className="user-component">
        <div className="user-info">
          <img src={this.props.state.image} alt="profile image"/>
          <h3>{this.props.state.name}</h3>
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
