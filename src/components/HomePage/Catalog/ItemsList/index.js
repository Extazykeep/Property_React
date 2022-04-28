import React from 'react';
import { Grid } from '@mui/material';
import CatalogItem from './CatalogItem';
import CatalogItemSkeleton from './CatalogItem/CatalogItemSkel';

const ItemsList = React.memo(({ posts, viewType, sortType, isLoading }) => {
	if (posts) {
		posts = sortType === 'by price DESC' ? [...posts].reverse() : posts;
	}
	const direction = viewType === 'grid' ? 'row' : 'column';

	const height = React.useRef();

	return (
		<div className="items-list" ref={height}>
			<Grid
				direction={direction}
				alignItems="stretch"
				container
				spacing={{ xs: 2 }}
			>
				{isLoading
					? Array(9)
							.fill()
							.map((_, index) => {
								return (
									<Grid item sm={4} xs={12} key={index}>
										<CatalogItemSkeleton />
									</Grid>
								);
							})
					: posts.map((post) => (
							<Grid item sm={4} xs={12} key={post.id}>
								<CatalogItem
									viewType={viewType}
									{...post}
									isLoading={isLoading}
								/>
							</Grid>
					  ))}
			</Grid>
		</div>
	);
});

export default ItemsList;
