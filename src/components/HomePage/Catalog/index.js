import React from 'react';
import './Catalog.css';

import { Grid, Container } from '@mui/material';

import ResultsFilters from './ResultsFilters';
import ItemsListContainer from './ItemsListContainer';
import LatestProperties from '../../LatestProperties';

const Catalog = React.memo(() => {
	return (
		<div className="main-catalog">
			<Container>
				<Grid container spacing={2}>
					<Grid item lg={9} xs={12}>
						<ResultsFilters />
						<ItemsListContainer />
					</Grid>
					<Grid item lg={3} xs={12}>
						<LatestProperties />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
});

export default Catalog;
