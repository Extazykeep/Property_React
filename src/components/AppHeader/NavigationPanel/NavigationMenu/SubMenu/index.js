import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ list }) => {
	return (
		<ul className="nav__submenu">
			{list.map((listitem) => {
				return (
					<li key={listitem.title} className="nav__submenu-item">
						<Link to={`${listitem.url}`}>{listitem.title}</Link>
					</li>
				);
			})}
		</ul>
	);
};
export default SubMenu;
