import React, {Component} from 'react';
import {connect} from 'react-redux';

class Bands extends Component {
	render() {
		return (
			<div className="bands section-wrapper">
				<div className="section-heading">
					<h1 className="">#bands</h1>
				</div>
				<div className="row section-row">
					{this.props.state.map((band, i) => {
						return (
							<div key={i} className="col s12 m4">
								<div className="card custom-card">
									<div className="card-content white-text">
										<p>{band.listing}</p>
									</div>
									<div className="card-action">
										<a className="band-link" href={band.link}>Check it out!</a>
									</div>
								</div>
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
