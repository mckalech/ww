import constants from './constants';
import { combineReducers } from 'redux';

const initialState = {
	servicesList: [
		{
			name:'Сантехника',
			id:124124
		},
		{
			name:'Мелкий ремонт',
			id:134754
		},
		{
			name:'Двери',
			id:424124
		},
		{
			name:'Бурение скважин',
			id:124124
		},
		{
			name:'Установка унитаза',
			id:134754
		},
		{
			name:'Полы',
			id:424124
		},
		{
			name:'Паркетные полы',
			id:124124
		},
		{
			name:'Комплексный ремонт',
			id:134754
		},
		{
			name:'Ремонт бытовой техники',
			id:424124
		},
	],
	serviceItem:{
		name:'Сантехника',
		id:124124
	},
	serviceQuestions:[
		{
			type: 'text',
			text:'Какова площадь квартиры?',
		},
		{
			type: 'select',
			text:'Какой тип унитаза?'
		},
		{
			type: 'text',
			text:'Когда провести работы?'
		},
		{
			type: 'select',
			text:'Сколько штук?'
		},
		{
			type: 'checkbox',
			text:'Какие дополнительные работы нужно произвести?'
		},
		{
			type: 'textarea',
			text:'Опишите задачу'
		},
		{
			type: 'true_false',
			text:'Требуется ли закупка материалов?'
		},
	]
	
};


function servicesList(state = initialState.servicesList, action={}) {
	return state;
}
function serviceItem(state = initialState.serviceItem, action={}) {
	return state;
}
function serviceQuestions(state = initialState.serviceQuestions, action={}) {
	return state;
}


const reducer = combineReducers({
	servicesList,
	serviceItem,
	serviceQuestions
});

export default reducer;