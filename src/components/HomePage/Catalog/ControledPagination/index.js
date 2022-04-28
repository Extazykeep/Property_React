import React from 'react';
import Pagination from '@mui/material/Pagination';

const ControledPagination = React.memo(({ count, page, handleChange }) => {
	const small = window.innerWidth < 376 ? "small" : "";
	return (
		<div className="catalog-pages">
			<Pagination
				count={count}
				page={page}
				variant="outlined"
				shape="rounded"
				onChange={handleChange}
				size={small}
			/>
		</div>
	);
});

export default ControledPagination;
