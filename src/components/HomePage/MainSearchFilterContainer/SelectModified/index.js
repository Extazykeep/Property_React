import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

const SelectWithProps = ({ onChange, value, itemsList }) => {
	return (
		<FormControl fullWidth>
			<Select
				onChange={onChange}
				value={value}
				MenuProps={{
					disableScrollLock: true,
				}}
				defaultValue={value}
			>
				{itemsList &&
					itemsList.map((item) => {
						return (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						);
					})}
			</Select>
		</FormControl>
	);
};

export default SelectWithProps;
