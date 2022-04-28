import React from 'react';
import './LanguageMenu.css';

const LanguageMenu = ({
	showOptionList,
	selectedText,
	languagesList,
	handleOptionClick,
	handleListDisplay,
}) => {
	return (
		<div className="custom-select-container">
			<div
				className={
					showOptionList ? 'selected-text active' : 'selected-text'
				}
				onClick={() => {
					handleListDisplay();
				}}
			>
				{selectedText.toUpperCase()}
			</div>
			{showOptionList && (
				<ul className="select-options">
					{languagesList.length
						? languagesList.map((language) => {
								return (
									<li
										className="custom-select-option"
										data-value={language}
										key={language}
										onClick={(e) => {
											handleOptionClick(e);
										}}
									>
										<span>FL </span>
										<span>{language.toUpperCase()}</span>
									</li>
								);
						  })
						: null}
				</ul>
			)}
		</div>
	);
};

export default LanguageMenu;
