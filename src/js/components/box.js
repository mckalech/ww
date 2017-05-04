var css = require("../../styles/styles.scss");
import React, { Component } from 'react';
import { Grid, Navbar , NavItem} from 'react-bootstrap';
import { connect } from 'react-redux';


class Box extends Component {
	render() {
		return (
			<div>
				<Navbar inverse>
				      <Navbar.Brand>
				        <a href="/">Wizard Wizard'ов</a>
				      </Navbar.Brand>
				</Navbar>
				<Grid>
					<div className="cont">
						{this.props.children}
					</div>	
				</Grid>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(Box);