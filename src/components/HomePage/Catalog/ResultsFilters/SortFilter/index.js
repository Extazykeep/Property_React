import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, MenuItem, Select } from '@mui/material';

const SortFilter = React.memo(({ handleSortType, sortType }) => {
	const { t } = useTranslation();
	const sorts = [
		'by publish day ASC',
		'by publish day DESC',
		'by price ASC',
		'by price DESC',
	];
	return (
		<div className="">
			<FormControl fullWidth>
				<Select
					MenuProps={{
						disableScrollLock: true,
					}}
					value={sortType}
					onChange={(e) => {
						handleSortType(e.target.value);
					}}
				>
					{sorts.map((item, index) => {
						return (
							<MenuItem key={item} value={item}>
								{t(`sorts.${index}`)}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
});

export default SortFilter;
