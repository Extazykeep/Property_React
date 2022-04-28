import React from 'react';
import { useTranslation } from 'react-i18next';

const ResultsCount = React.memo(() => {
	const { t } = useTranslation();
	return (
		<div className="results-count">
			<span>{t('results')}</span>
			<sub>(459)</sub>
		</div>
	);
});

export default ResultsCount;
