import React, {Component} from 'react';
import {connect} from 'react-redux';

class Bands extends Component {
    render() {
        return (
            <div className="bands">
                <h1>#bands</h1>
                <div className="row">
                    {this.props.state.map((band, i) => {
                        return (
                            <div key={i} className="col s12 m4">
                                <div className="card blue lighten-3">
                                    <div className="card-content white-text">
                                        <p>{band.listing}</p>
                                    </div>
                                    <div className="card-action">
                                        <a className="band-link" href={band.link}>Check it out!</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {state: state.bands}
}

const Container = connect(mapStateToProps)(Bands);

export default Container;
