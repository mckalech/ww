import React, { Component } from 'react';
import {Col, Row, Breadcrumb, Panel, Form, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import _ from 'underscore';
import QuestionIcon from './questionIcon';


class QuestionItem extends Component {
	constructor(props) {
		super(props);
		this.state={
			questionText:'',
			answersCount:2
		}
	}
	componentDidMount() {
		const { dispatch } = this.props;
	}
	renderBread(){
		return (
			<Row>
				<Breadcrumb>
			    	<Breadcrumb.Item href="/">Список услуг</Breadcrumb.Item>
			    	<Breadcrumb.Item href="/service/123">Сантехника</Breadcrumb.Item>
			    	<Breadcrumb.Item active>Вопрос</Breadcrumb.Item>
			  	</Breadcrumb>
		  	</Row>
		);
	}
	renderAnswers(){
		let answers = [];
		for(var i = 0;i<this.state.answersCount;i++){
			answers.push((
				<div key={i}>
					<FormControl
			            type="text"
			            placeholder="Enter text"
			        /><br/>
		        </div>
			))
		}
		return answers;
	}
	render() {
		return (
			<div>
				{this.renderBread()}
				<Row>
					<Col md={2}></Col>
					<Col md={8}>
						<Panel 
							header={(<h4>Тип вопроса: <b>Checkbox</b><QuestionIcon type="checkbox"/></h4>)}
							footer={<div className="clearfix"><Button className="pull-right" bsStyle="success">Сохранить</Button></div>}
						>
							<Form>
								<ControlLabel>Текст вопроса</ControlLabel>
								<FormControl
						            type="text"
						            value={this.state.questionText}
						            placeholder="Enter text"
						            onChange={(e)=>this.setState({questionText:e.target.value})}
						        />

						        <br/><br/><ControlLabel>Варианты ответа</ControlLabel>
						        {this.renderAnswers()}
						        <Button onClick={()=>this.setState({answersCount: this.state.answersCount+1})}>Добавить вариант</Button>

						        <br/><br/><br/>
						        <ControlLabel>Опции</ControlLabel>
						        <Checkbox>Обязательный вопрос</Checkbox>
						        <Checkbox>Добавить "Другое"</Checkbox>
							</Form>
		  				</Panel>
					</Col>
					
					<Col md={2}></Col>
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

export default withRouter(connect(mapStateToProps)(QuestionItem));
