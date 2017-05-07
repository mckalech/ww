import React, { Component } from 'react';
import {Col, Row, Breadcrumb, Panel, Form, FormControl, ControlLabel, Button, Checkbox, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import _ from 'underscore';
import Select from 'react-select';

const answers = [
	{
		value:0,
		label:'Сегодня'
	},
	{
		value:1,
		label:'Завтра'
	},
	{
		value:2,
		label:'На неделе',
	},
	{
		value:3,
		label:'Без разницы',
	}
]

class JumpItem extends Component {
	constructor(props) {
		super(props);
		this.state={
			conditionsCount:1,
			serviceValue:''
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
			    	<Breadcrumb.Item active>Ветвление: Когда провести работы?</Breadcrumb.Item>
			  	</Breadcrumb>
		  	</Row>
		);
	}
	renderConditions(){
		let options = this.props.serviceQuestions.map((s)=>({
			value: s.id, 
			label: s.text
		}));
		let conditions = [];
		for(var i = 0;i<this.state.conditionsCount;i++){
			conditions.push((
				<Well key={i} className="b-condition">
					<Row>
						<Col md={1}><ControlLabel>Если</ControlLabel></Col>
						<Col md={4}>
							<Select
							    name="form-field-name"
							    value={134755}
							    options={options}
							/>
						</Col>
						<Col md={2}>
							<Select
							    name="form-field-name"
							    options={[{value:1, label: "="},{value:0, label: "!="}]}
							/>
						</Col>
						<Col md={5}>
							<Select
							    name="form-field-name"
							    options={answers}
							/>
						</Col>
				    </Row> 
				    <br />
				    <Row> 
				    	<Col md={1}><ControlLabel>Go to</ControlLabel></Col>
				    	<Col md={4}>
							<Select
							    name="form-field-name"
							    options={options}
							/>
						</Col>
						<Col md={7}>
							<Button
							bsStyle="warning" 
							className="pull-right"
							onClick={()=>this.setState({conditionsCount: this.state.conditionsCount-1})}>Удалить</Button>
						</Col>
				    </Row>       
		        </Well>
			))
		}
		return conditions;
	}
	render() {
		return (
			<div>
				{this.renderBread()}
				<Row>
					<Col md={1}></Col>
					<Col md={10}>
						<Panel 
							header={(<h4>Ветвление: Когда провести работы?</h4>)}
							footer={<div className="clearfix"><Button href="/service/123/" className="pull-right" bsStyle="success">Сохранить</Button></div>}
						>
							<Form>
						        {this.renderConditions()}
						        <Button bsStyle="primary" onClick={()=>this.setState({conditionsCount: this.state.conditionsCount+1})}>Добавить условие</Button>
							</Form>
		  				</Panel>
					</Col>
					<Col md={1}></Col>
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

export default withRouter(connect(mapStateToProps)(JumpItem));
