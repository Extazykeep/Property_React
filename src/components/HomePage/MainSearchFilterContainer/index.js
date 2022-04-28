import React from 'react';
import { Search } from '@mui/icons-material';
import { Container, Grid, TextField, Button } from '@mui/material';
import './MainSearchFilter.scss';
import SelectWithProps from './SelectModified';
import { useInputField, useUrlParams, useSelect } from '../../../hooks';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const MainSearchFilterContainer = () => {
	const { t } = useTranslation();
	const urlParams = useUrlParams();
	const [_, setSearchParams] = useSearchParams();

	const location = useInputField('location', urlParams.location);
	const min = useInputField('minPrice', urlParams.min);
	const max = useInputField('maxPrice', urlParams.max);
	const purpose = useSelect('purpose', urlParams.purpose);
	const type = useSelect('type', urlParams.type);
	const bedrooms = useSelect('bedrooms', urlParams.bedrooms);

	const handleSubmit = () => {
		const updateParams = {
			...urlParams,
			location: location.value,
			min: min.value,
			max: max.value,
			purpose: purpose.value,
			type: type.value,
			bedrooms: bedrooms.value,
		};
		setSearchParams(updateParams);
	};

	return (
		<div className="search-bar">
			<Container>
				<Grid container spacing={{ md: 4, xs: 2 }}>
					<Grid item={true} md={6} xs={12}>
						<TextField
							{...location}
							placeholder={t('placeholder')}
							fullWidth
						></TextField>
					</Grid>
					<Grid item={true} md={3} xs={6}>
						<TextField
							{...min}
							placeholder="Min, €"
							fullWidth
						></TextField>
					</Grid>
					<Grid item={true} md={3} xs={6}>
						<TextField
							{...max}
							placeholder="Max, €"
							fullWidth
						></TextField>
					</Grid>
					<Grid item={true} md={3} xs={6}>
						<SelectWithProps
							{...purpose}
							itemsList={[
								'Purpose',
								'Antalya',
								'Tepe-Alanya-Antalya',
							]}
						/>
					</Grid>
					<Grid item={true} md={3} xs={6}>
						<SelectWithProps
							{...type}
							itemsList={['Type', 'Villa', 'Apartment', 'Duplex']}
						/>
					</Grid>
					<Grid item={true} md={3} xs={6}>
						<SelectWithProps
							{...bedrooms}
							itemsList={['Bedrooms', '1+0', '1+1', '2+1', '3+1']}
						/>
					</Grid>

					<Grid item={true} md={3} xs={6}>
						<Button
							onClick={() => {
								handleSubmit();
							}}
							fullWidth
							variant="contained"
							startIcon={<Search />}
						></Button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
export default MainSearchFilterContainer;
