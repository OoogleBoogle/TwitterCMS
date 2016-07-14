import React, { Component } from 'react';
import { connect } from 'react-redux';

class Images extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="gallery">
        <h1>These are the #images tweets</h1>
        {this.props.state.map((image, i) => {
          console.log(image.src);
          return <div key={i} className="image">
                    <img src={image.src} alt="whyyyy won't you load?!"/>
                    <p>{image.description}</p>
                 </div>
        })}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    state: state.images
  }
}

const Container = connect(mapStateToProps)(Images);

export default Container;
