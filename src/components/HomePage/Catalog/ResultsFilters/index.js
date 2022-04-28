import React from 'react';
import './ResultsFilters.css';
import ViewType from './ViewType';
import SortFilter from './SortFilter';
import ResultsCount from './ResultsCount';
import { useSelector, useDispatch } from 'react-redux';
import {
	setSort,
	setView,
	getCurrentSort,
	getCurrentView,
} from '../../../../services/sortsSlice';

const ResultsFilters = () => {
	const sortType = useSelector(getCurrentSort);
	const viewType = useSelector(getCurrentView);
	const dispatch = useDispatch();

	const handleSortType = React.useCallback((sort) => {
		dispatch(setSort(sort));
	}, []);

	const handleViewType = React.useCallback((view) => {
		dispatch(setView(view));
	}, []);

	return (
		<div className="result-filters-wrapper">
			<ResultsCount />
			<div className="result-filters">
				<SortFilter
					handleSortType={handleSortType}
					sortType={sortType}
				/>
				<ViewType viewType={viewType} handleViewType={handleViewType} />
			</div>
		</div>
	);
};

export default ResultsFilters;
