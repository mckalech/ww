import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';



export default class QuestionIcon extends Component {
	render() {
		let type;
		switch (this.props.type) {
  			case 'select':
    			type = 'th-list';
    			break;
    		case 'text':
    			type = 'text-size';
    			break;
    		case 'checkbox':
    			type = 'check';
    			break;
	}
		return (
			<Glyphicon glyph={type} style={{marginRight:7, marginLeft:7}}/>
		)
	}
}
	


