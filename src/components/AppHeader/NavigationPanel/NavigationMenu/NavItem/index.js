import React from 'react';
import { Link } from 'react-router-dom';
import SubMenu from '../SubMenu';
import { ArrowDropDown } from '@mui/icons-material';

const NavItem = ({ title, submenuitems }) => {
	const hasSubItems = typeof submenuitems !== 'string';

	const submenu = hasSubItems ? <SubMenu list={submenuitems} /> : null;

	const link = hasSubItems ? (
		<span className={'nav__menu-item-drop'}>
			{title}
			{<ArrowDropDown />}
		</span>
	) : (
		<Link className={'nav__menu-item-drop'} to={`${submenuitems}`}>
			{title}
		</Link>
	);

	return (
		<li className={'nav__menu-item'}>
			{link}
			{submenu}
		</li>
	);
};
export default NavItem;
