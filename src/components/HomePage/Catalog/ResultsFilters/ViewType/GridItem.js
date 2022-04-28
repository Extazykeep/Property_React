import React from 'react';
import { GridView } from '@mui/icons-material';

const GridItem = React.memo(({ viewType, handleViewType }) => {
	const isActive = viewType === 'grid' ? 'active' : '';
	return (
		<div
			className={'view-item ' + isActive}
			onClick={() => {
				handleViewType('grid');
			}}
		>
			<GridView />
		</div>
	);
});

export default GridItem;
