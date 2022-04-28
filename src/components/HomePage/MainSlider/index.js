import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css';

const WelcomeSlider = ({ images }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={0}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
		>
			{images &&
				images.map((image) => {
					return (
						<SwiperSlide key={image}>
							<img src={image} alt="" />
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
};
export default WelcomeSlider;
