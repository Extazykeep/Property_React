import React from 'react';
import NavigationMenu from '../NavigationMenu';

const NavigationMenuContainer = () => {
	const serverResponse = {
		Home: '/',
		Property: [
			{ title: 'Cyprus', url: 'cyprus' },
			{ title: 'Antalya', url: 'antalya' },
			{ title: 'Alanya', url: 'alanya' },
			{ title: 'Stambul', url: 'stambul' },
		],
		'About us': [
			{ title: 'Company Profile', url: 'profile' },
			{ title: 'Our Team', url: 'team' },
			{ title: 'History', url: 'history' },
			{ title: 'Work with us', url: 'work' },
			{ title: 'Colaboration', url: 'collab' },
		],
		buyings: [
			{ title: 'Citizenship', url: 'citizen' },
			{ title: 'Purchasing', url: 'purchase' },
			{ title: 'Expenses', url: 'expenses' },
			{ title: 'Power of attorney', url: 'power' },
			{ title: 'Tapu', url: 'tapu' },
			{ title: 'Mortgage', url: 'mortgage' },
			{ title: 'Why turkey', url: 'whytur' },
			{ title: 'Healthcare', url: 'healthcare' },
		],
		Contact: 'contact',
		Testimonials: 'testimonials',
		News: 'news',
	};
	return (
		<div>
			<NavigationMenu response={serverResponse} />
		</div>
	);
};
export default NavigationMenuContainer;
