import React from 'react';
import './CatalogItem.css';
import { Link } from 'react-router-dom';
import plusimage from '../../../../../images/plus.png';
import HomeIcon from '@mui/icons-material/Home';
import Crop32Icon from '@mui/icons-material/Crop32';

const CatalogItem = ({ viewType, id, title, isLoading }) => {
	const listed = viewType === 'list' ? 'listed' : '';
	return (
		<div className={'item-wrapper ' + listed}>
			<Link className="catalog-item-link" to={`/catalogitem/${id}`}>
				<div className={'card-content ' + listed}>
					<div className={'item-image-wrapper ' + listed}>
						<img
							className={'item-image ' + listed}
							src="https://ayvazogluhomes.com/files/strict_cache/510x330116510.jpg"
							alt=""
						/>
						<div className="layer">
							<img src={plusimage} alt="" />
						</div>
					</div>
					<div className="catalog-item-description">
						<div className="catalog-item-location">
							<span>TEPE-ALANYA-ANTALYA</span>
						</div>
						<strong className="catalog-item-title">
							{title.substring(0, 20)}
						</strong>
						<p className="catalog-item-id">ID: {id} </p>
						<div className="catalog-item-attrs">
							<span>€175,000</span>
							<span>
								<HomeIcon /> Apartment
							</span>
							<span>
								<Crop32Icon /> 160 m2
							</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CatalogItem;
