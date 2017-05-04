import React, { Component } from 'react';
import {Col, Row, ListGroup, ListGroupItem, Panel, FormControl, Glyphicon, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
//import UsersListItem from './listitem';
import _ from 'underscore';


class ServicesList extends Component {
	constructor(props) {
		super(props);
		this.state={
			servicesList: this.props.servicesList,
			search: ''
		}
	}
	componentDidMount() {
		const { dispatch } = this.props;
		//dispatch(fetchUsersList())
		//dispatch(fetchTree())
	}
	
	render() {

		const list = _.map(this.state.servicesList, (service, i)=>(
			<ListGroupItem key={i} className="b-service-list__item">
				<Link to="/service/123">{service.name}</Link> 
				<div className="pull-right b-service-list-item__icons">
					<Glyphicon glyph="stats"/>
				</div>
				<div className="pull-right b-service-list-item__id">(id: {service.id})</div>
			</ListGroupItem>
		))

		const search = (
			<Row>
				<Col style={{paddingTop:7}} md={1}><b>Поиск:</b></Col>
				<Col md={8}>
					<FormControl type="text" ref="search" name="search" value={this.state.search} onChange={(e)=>this.changeSearchValue(e)} />
				</Col>
				<Col md={2}>
					<Button bsStyle="success"><Glyphicon glyph="plus"/> Добавить услугу</Button>
				</Col>
			</Row>
		)

		

		return (
			<Row>
				<Col md={2}></Col>
				<Col md={8}>
					<Panel header={(<h3>Список услуг</h3>)}>
						{search} 
						<br/>
						<ListGroup>
							{list}
	  					</ListGroup>
  					</Panel>
				</Col>
				<Col md={2}></Col>
			</Row>
		)
	}
	changeSearchValue(e){
		const list = _.filter(this.props.servicesList, (service)=>(
			service.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1
		))
		this.setState({
			search:e.target.value,
			servicesList: list
		})
	}
}
	

function mapStateToProps(state, ownProps) {
	return {
		servicesList: state.servicesList
	}
}

export default withRouter(connect(mapStateToProps)(ServicesList));
