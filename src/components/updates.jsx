import React, {Component} from 'react';
import {connect} from 'react-redux';

class Updates extends Component {
	render() {
		return (
			<div className="section updates">
				<div className="section-header">
					<h1>Recent Updates</h1>
					<p>(taken from the #update tags)</p>
				</div>
				<div className="section-content">
					{this.props.state.map((update, i) => {
						return (
							<div key={i} className="update listing">
								<p>{update}</p>
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
