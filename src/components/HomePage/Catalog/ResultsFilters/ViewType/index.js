import React from 'react';
import GridItem from './GridItem';
import ListItem from './ListItem';

const ViewType = React.memo((props) => {
	return (
		<div className="view-wrapper">
			<GridItem {...props} />
			<ListItem {...props} />
		</div>
	);
});

export default ViewType;
