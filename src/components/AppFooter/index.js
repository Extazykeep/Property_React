import { Container, Grid } from '@mui/material';
import React from 'react';
import './AppFooter.css';
import logo from '../../images/logo.png';
import FooterItem from './FooterItem';

const AppFooter = () => {
	return (
		<div className="app-footer">
			<Container>
				<div className="footer-content">
					<Grid container spacing={2}>
						<Grid item md={3} sm={12} xs={12}>
							<div className="footer-logo">
								<img src={logo} alt="footer-logo" />
							</div>
						</Grid>
						<Grid item md={3} sm={4} xs={12}>
							<FooterItem />
						</Grid>
						<Grid item md={3} sm={4} xs={12}>
							<FooterItem />
						</Grid>
						<Grid item md={3} sm={4} xs={12}>
							<FooterItem />
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default AppFooter;
