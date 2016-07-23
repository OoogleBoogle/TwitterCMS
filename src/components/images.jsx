import React, {Component} from 'react';
import {connect} from 'react-redux';

class Images extends Component {
	render() {
		return (
			<div className="gallery-container">
				<div className="section-header">
					<h1>Image Gallery</h1>
					<p>(taken from the #images tag)</p>
				</div>
				<div className="gallery">
					{this.props.state.map((image, i) => {
						return (
							<div key={i} className="images">
								<img src={image.src}/>
								<p>{image.description}</p>
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
