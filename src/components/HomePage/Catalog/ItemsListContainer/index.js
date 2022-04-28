import React from 'react';
import ItemsList from '../ItemsList';

import { useSearchParams } from 'react-router-dom';
import { useGetTenPostsQuery } from '../../../../services/posts';
import { useSelector } from 'react-redux';
import {
	getCurrentSort,
	getCurrentView,
} from '../../../../services/sortsSlice';
import ControledPagination from '../ControledPagination';
import { useUrlParams } from '../../../../hooks';

const ItemsListContainer = () => {
	const sortType = useSelector(getCurrentSort);
	const viewType = useSelector(getCurrentView);

	const urlParams = useUrlParams();

	const [_, setSearchParams] = useSearchParams();

	const handlePageChange = React.useCallback((_, page) => {
		setSearchParams({ ...urlParams, page, _start: (page - 1) * 9 });
	}, []);

	const {
		data: posts,
		error,
		isLoading,
		isFetching,
	} = useGetTenPostsQuery(urlParams);

	return (
		<div>
			<ItemsList
				posts={posts}
				viewType={viewType}
				sortType={sortType}
				isLoading={isLoading}
			/>
			<ControledPagination
				count={10}
				page={+urlParams.page}
				handleChange={handlePageChange}
			/>
		</div>
	);
};

export default ItemsListContainer;
