import React from 'react';
import RoutePages from '../routes';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from '../components/ScrollTop';
import './app.scss';

const App = () => {
	return (
		<BrowserRouter>
			<ScrollTop />
			<div className="App">
				<AppHeader />
				<RoutePages />
				<AppFooter />
			</div>
		</BrowserRouter>
	);
};

export default App;
