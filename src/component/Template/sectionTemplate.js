import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './section.css';
export default class SectionTemplate extends Component {

	render() {

		return(
			
				<Grid className="section">
					<Row className="show-grid section-header">
						<Col xs={12}>
							<h2>{this.props.headerText}</h2>
						</Col>
					</Row>
				    <Row className="show-grid section-body">
				     {this.props.children}
				    </Row>
				 </Grid>
	
			);
	}
}