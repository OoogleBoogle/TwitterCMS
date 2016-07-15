import React, {Component} from 'react';
import {connect} from 'react-redux';

class Images extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="gallery section-wrapper">
              <div className="section-heading">
                <h1>#images</h1>
              </div>
                <div className="row section-row">
                    {this.props.state.map((image, i) => {
                        return (

                            <div key={i} className="col s12 m4">
                                <div className="card small">
                                    <div className="card-image">
                                        <img src={image.src}/>
                                    </div>
                                    <div className="card-content">
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {state: state.images}
}

const Container = connect(mapStateToProps)(Images);

export default Container;
