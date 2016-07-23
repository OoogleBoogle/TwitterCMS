import React, {Component} from 'react';
import {connect} from 'react-redux';

class Bands extends Component {
	render() {
		return (
			<div className="bands">
				<div className="title-header">
					<h1>Upcoming Events</h1>
					<p>(taken from the #bands tag)</p>
				</div>
				<div className="section-content">
					{this.props.state.map((band, i) => {
						return (
							<div key={i} className="listing">
								<p>{band.listing}</p>
								<a className="band-link" href={band.link}>Check it out!</a>
							</div>
						)
					}) }
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return { state: state.bands }
}

const Container = connect(mapStateToProps)(Bands);

export default Container;
