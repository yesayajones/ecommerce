import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
	return (
		<>
			<HeroBanner />
			<div className='products-heading'>Best Selling Products</div>
			<p>Speakers of many variations</p>
			<div className='products-container'>
				{['Product 1', 'Product 2'].map((product) => product)}
			</div>
			<FooterBanner />
		</>
	);
};

export default Home;
