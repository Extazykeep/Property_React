import React from 'react';
import LanguageMenu from '../LanguageMenu';

import { useTranslation } from 'react-i18next';

const LanguageMenuContainer = () => {
	const [selectedText, setSelectedText] = React.useState('EN');
	const [showOptionList, setShowOptionList] = React.useState(false);
	const [languagesList, setLanguagesList] = React.useState([]);

	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		setLanguagesList(['en', 'de', 'ru', 'tr', 'fr']);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleListDisplay = () => {
		setShowOptionList(true);
	};

	const handleOptionClick = (e) => {
		const lang = e.target.getAttribute('data-value');
		setSelectedText(lang);
		changeLanguage(lang);
		setShowOptionList(false);
	};

	const handleClickOutside = (e) => {
		if (
			!e.target.classList.contains('custom-select-option') &&
			!e.target.classList.contains('selected-text')
		) {
			setShowOptionList(false);
		}
	};
	return (
		<>
			<LanguageMenu
				languagesList={languagesList}
				showOptionList={showOptionList}
				selectedText={selectedText}
				handleOptionClick={handleOptionClick}
				handleListDisplay={handleListDisplay}
			/>
		</>
	);
};

export default LanguageMenuContainer;
