import React from 'react';
import logo from '../../../images/logo.png';
import { Container } from '@mui/material';
import LanguageMenuContainer from './LanguageMenuContainer';
import NavigationMenuContainer from './NavigationMenuContainer';
import './NavigationPanel.css';

const NavigationPanel = () => {
	return (
		<div className="navigation-panel">
			<Container>
				<div className="navigation-content">
					<div className="logo-wrapper">
						<img src={logo} alt="logo" />
					</div>
					<NavigationMenuContainer />
					<LanguageMenuContainer />
				</div>
			</Container>
		</div>
	);
};
export default NavigationPanel;
