import React from 'react';
import './NavigationMenu.css';
import NavItem from './NavItem';

const NavigationMenu = ({ response }) => {
	return (
		<div className="navigation-container">
			<nav className="nav">
				<ul className="nav__menu">
					{Object.keys(response).map((key) => {
						return (
							<NavItem
								key={key}
								title={key}
								submenuitems={response[key]}
							/>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};
export default NavigationMenu;
