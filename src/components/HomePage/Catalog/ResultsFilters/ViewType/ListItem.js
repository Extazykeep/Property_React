import React from 'react';
import { ViewList } from '@mui/icons-material';

const ListItem = React.memo(({ viewType, handleViewType }) => {
	const isActive = viewType === 'list' ? 'active' : '';

	return (
		<div
			className={'view-item ' + isActive}
			onClick={() => {
				handleViewType('list');
			}}
		>
			<ViewList />
		</div>
	);
});

export default ListItem;
