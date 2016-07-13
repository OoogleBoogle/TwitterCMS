import React, {Component} from 'react';
import { connect } from 'react-redux';

class Bands extends Component {
  render() {
    return (
      <div className="bands">
        <h1>These are the #bands tweets</h1>
        {this.props.state.map((band, i) => {
          return <div key={i} className="listing">
                    <p>{band.listing}</p>
                    <a href={band.link}>{band.link}</a>
                 </div>
        })}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    state: state.bands
  }
}

const Container = connect(mapStateToProps)(Bands);

export default Container;
