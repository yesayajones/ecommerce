import React from 'react';

const Home = () => {
	return (
		<>
			Hero Banner
			<div>Best Selling Products</div>
			<p>Speakers of many variations</p>
			<div>{['Product 1', 'Product 2'].map((product) => product)}</div>
			Footer
		</>
	);
};

export default Home;
