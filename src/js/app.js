import {render} from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Box from './components/box';
import ServicesList from './components/list';
import ServiceItem from './components/serviceItem';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



const store = configureStore();

render(
	(
		<Provider store={store}>
			<Box>
				<Router>
					<div>
						<Route exact path="/" component={ServicesList} />
						<Route exact path="/service/123" component={ServiceItem} />
					</div>
				</Router>
			</Box>
		</Provider>
	),document.getElementById('content')
);

