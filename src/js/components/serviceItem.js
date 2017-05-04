import React, { Component } from 'react';
import {Col, Row, ListGroup, ListGroupItem,Glyphicon, Well, Breadcrumb, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import _ from 'underscore';
import QuestionIcon from './questionIcon';


class ServiceItem extends Component {
	constructor(props) {
		super(props);
		this.state={}
	}
	componentDidMount() {
		const { dispatch } = this.props;
	}
	renderQuestions(){
		const q = [
			{
				type: 'text',
				title:'Текстовое поле'
			},
			{
				type: 'checkbox',
				title:'Мультивыбор'
			},
			{
				type: 'select',
				title:'Селект'
			},
			{
				type: 'radio',
				title:'Радиобаттон'
			},
			{
				type: 'textarea',
				title:'Большой текст'
			},
			{
				type: 'true_false',
				title:'Да / Нет'
			},
		];

		return _.map(q, (question, i)=>(
			<ListGroupItem href="/question/12345/" key={i}>
				{question.title}
				<QuestionIcon {...question} />
			</ListGroupItem>
		))
	}
	renderServiceQuestions(){
		return _.map(this.props.serviceQuestions, (question, i)=>(
			<ListGroupItem key={i} className="b-questions-list__item">
				<span>{i+1}. </span>
				<QuestionIcon {...question} />
				<Link to="/question/12345">{question.text}</Link> 
				<div className="pull-right b-questions-list-item__icons">
					<Glyphicon glyph="share-alt" style={{marginRight:15}} />
					<Glyphicon glyph="arrow-down" style={{marginRight:15}}/>
					<Glyphicon glyph="arrow-up" style={{marginRight:15}}/>
					<Glyphicon glyph="remove"/>

					
				</div>
			</ListGroupItem>
		))
	}
	renderBread(){
		return (
			<Row>
				<Breadcrumb>
			    	<Breadcrumb.Item href="/">Список услуг</Breadcrumb.Item>
			    	<Breadcrumb.Item active>Сантехника</Breadcrumb.Item>
			  	</Breadcrumb>
		  	</Row>
		);
	}
	render() {
		return (
			<div>
				{this.renderBread()}
				<Row>
					<Well>
						<h3>Услуга: Сантехника</h3>
						<h5>Pservice_id: 1221412</h5>
					</Well>
				</Row>
				<Row>
					<Col md={4}>
						<Panel header={(<h4>Добавить вопрос</h4>)}>
							<ListGroup>
								{this.renderQuestions()}
		  					</ListGroup>
		  				</Panel>
					</Col>
					<Col md={8}>
						<Panel 
							header={(<h4>Список вопросов</h4>)}
							footer={<div className="clearfix"><Button className="pull-right" bsStyle="success">Сохранить</Button></div>}
						>
							<ListGroup>
								{this.renderServiceQuestions()}
		  					</ListGroup>
	  					</Panel>
					</Col>

				</Row>
			</div>
		)
	}

}
	

function mapStateToProps(state, ownProps) {
	return {
		serviceItem: state.serviceItem,
		serviceQuestions: state.serviceQuestions
	}
}

export default withRouter(connect(mapStateToProps)(ServiceItem));
