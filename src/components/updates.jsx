import React, {Component} from 'react';
import {connect} from 'react-redux';

class Updates extends Component {
    render() {
        return (
            <div className="updates section-wrapper">
                <div className="section-heading">
                  <h1>#updates</h1>
                </div>
                <div className="row section-row">
                    {this.props.state.map((update, i) => {
                        return (
                            <div key={i} className="">
                                <div className="card custom-card">
                                    <div className="card-content white-text">
                                        <p>{update}</p>
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
    return {state: state.updates}
}

const Container = connect(mapStateToProps)(Updates);

export default Container;
