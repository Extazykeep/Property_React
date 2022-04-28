import React from 'react';
import './AppHeader.css';
import ContactsLine from './ContactsLine';
import NavigationPanel from './NavigationPanel';

const AppHeader = () => {
	return (
		<div className="app-header">
			<ContactsLine />
			<NavigationPanel />
		</div>
	);
};

export default AppHeader;
