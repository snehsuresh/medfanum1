import React from 'react';
import './product.css';
import PropTypes from 'prop-types';

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

Product.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
};

export default Product;
