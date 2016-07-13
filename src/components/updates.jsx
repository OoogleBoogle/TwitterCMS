import React, {Component} from 'react';
import { connect } from 'react-redux';

class Updates extends Component {
  render() {
    return (
      <div className="updates">
        <h1>These are the #updates tweets</h1>
        {this.props.state.map((update, i) => {
          return <div key={i} className="update">
                    <p>{update}</p>
                 </div>
        })}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    state: state.updates
  }
}

const Container = connect(mapStateToProps)(Updates);

export default Container;
