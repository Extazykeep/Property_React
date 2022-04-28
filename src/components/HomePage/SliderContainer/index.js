import React from 'react';

import firstslide from '../../../images/slider-images/slider-first.jpg';
import secondslide from '../../../images/slider-images/slider-second.jpg';
import thirdslide from '../../../images/slider-images/slider-third.jpg';
import fourthslide from '../../../images/slider-images/slider-fourth.jpg';
import Slider from '../MainSlider';

const SliderContainer = () => {
	return (
		<Slider images={[firstslide, secondslide, thirdslide, fourthslide]} />
	);
};

export default SliderContainer;
