import React, { Component } from 'react';
import {Col, Row, Modal, Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import _ from 'underscore';
import Select from 'react-select';



class AddService extends Component {
	constructor(props) {
		super(props);
		this.state={
			serviceValue:''
		}
	}
	componentDidMount() {
		const { dispatch } = this.props;
	}
	
	render() {
		let options = this.props.servicesList.map((s)=>({
			value: s.id, 
			label: s.name
		}));
		return (
			<Modal show={this.props.showModal} onHide={this.props.closeModal}>
        		<Modal.Header closeButton>
        			<Modal.Title>Добавление услуги</Modal.Title>
        		</Modal.Header>
          		<Modal.Body>
          			<Select
					    name="form-field-name"
					    value={this.state.serviceValue}
					    options={options}
					    onChange={(opt)=>{
					    	this.setState({serviceValue:opt.value})
					    }}
					/>
          		</Modal.Body>
          		<Modal.Footer>
            		<Button bsStyle="success" onClick={this.props.closeModal}>Добавить</Button>
          		</Modal.Footer>
			</Modal>
		)
	}

}
	

function mapStateToProps(state, ownProps) {
	return {
		servicesList: state.servicesList,
	}
}

export default withRouter(connect(mapStateToProps)(AddService));
