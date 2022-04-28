import React from 'react';
import { Stack, Skeleton } from '@mui/material';

const CatalogItemSkel = () => {
	return (
		<Stack spacing={2} animation="wave">
			<Skeleton variant="rectangular" width={276} height={178} />
			<Skeleton variant="text" />
			<Skeleton variant="text" />
			<Skeleton variant="text" />
			<Skeleton variant="text" />
		</Stack>
	);
};

export default CatalogItemSkel;
