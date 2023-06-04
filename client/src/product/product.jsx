import React from 'react';
import './product.css';

const Product = ({ product }) => {
	const { name, desc, image } = product;

	return (
		<div className="product">
			<img src={image} alt={name} className="product-image" />
			<h3 className="product-name">{name}</h3>
			<p className="product-price">{desc}</p>
			{/* Add more product details and functionality as needed */}
		</div>
	);
};

export default Product;
