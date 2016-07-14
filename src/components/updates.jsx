import React, {Component} from 'react';
import { connect } from 'react-redux';

class Updates extends Component {
  render() {
    return (
      <div className="updates">
        <h1>These are the #updates tweets</h1>
          <div className="row">
        {this.props.state.map((update, i) => {
          return(

        <div key={i} className="col s12 m4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <p>{update}</p>
          </div>
        </div>
      </div>)

        })}
      </div>
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
